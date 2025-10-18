const Avatar = ({ src }: { src: string }) => {
  return <img src={src} className="h-9 w-9 rounded-md object-cover" />;
};

export default Avatar;
