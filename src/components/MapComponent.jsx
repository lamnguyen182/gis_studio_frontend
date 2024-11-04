import React, { useEffect, useRef } from "react";
import L from "leaflet";

const MapComponent = ({ studios }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Kiểm tra nếu map đã được khởi tạo
    if (!mapRef.current) {
      // Khởi tạo bản đồ và lưu vào mapRef
      mapRef.current = L.map("map").setView([10.0452, 105.7469], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(mapRef.current);
    }

    // Thêm các marker từ studios
    studios.forEach((studio) => {
      const marker = L.marker([studio.latitude, studio.longitude]).addTo(
        mapRef.current
      );
      marker.bindPopup(`
                <b>${studio.name}</b><br>
                Địa chỉ: ${studio.address}<br>
                Số điện thoại: ${studio.phone}
            `);
    });

    // Dọn dẹp bản đồ khi component bị unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.off();
        mapRef.current.remove();
        mapRef.current = null; // Reset mapRef để tránh lỗi khi component render lại
      }
    };
  }, [studios]);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default MapComponent;
