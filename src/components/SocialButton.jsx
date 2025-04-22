function SocialButton({ platform, url, buttonColor, className, logoUrl }) {
  return (
    <a
      className={`btn btn-${buttonColor} transition hover:scale-105 ${className} flex items-center justify-center`} // Flex untuk menata logo dan teks
      href={url}
      target="_blank"
    >
      <img src={logoUrl} alt={`${platform} logo`} className="w-5 h-5 mr-2" />{" "}
      {/* Menambahkan logo */}
      {platform}
    </a>
  );
}

export default SocialButton;
