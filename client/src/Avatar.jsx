import React from 'react';

export default function Avatar({ userId, username = '', online }) {
  const colors = ['bg-white-200'];
  const userIdBase10 = parseInt(userId.substring(10), 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];

  return (
    <div className={"w-8 h-8 relative rounded-full flex items-center " + color}>
      {username ? (
        <img 
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAowMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAAUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMRQAAAAAAABRFEVFRRFQABVQAAFQAQEVFAFBBQVCKgKAgCKCCoIogKoAgACiAoAIgCipARVQAFQBQAAAQVBAIAoICgAACiKKIAgEAAAAARRFFEUAAAAAAAAVABFEVAABAAUAEAAURRQAEUAAAAFABAAUQVEAAQAUAEBUAUEFUAAACKgoAIAACAqAAAAACAABFRRQCAAoIKigAIIaYAEABYgAYoIoIoBQAXARUigAqj/2Q=="
          alt={username}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <div className="text-center w-full opacity-70">{username[0]}</div>
      )}
      {online && (
        <div className="absolute w-3 h-3 bg-green-400 bottom-0 right-0 rounded-full border border-white"></div>
      )}
      {!online && (
        <div className="absolute w-3 h-3 bg-gray-400 bottom-0 right-0 rounded-full border border-white"></div>
      )}
    </div>
  );
}
