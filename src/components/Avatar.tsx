const Avatar = ({ src }: { src: string }) => {
  return <img src={src} className="h-9 w-9 rounded-full object-cover" />;
};

export default Avatar;
