function SocialButton({ platform, url, buttonColor = "primary" }) {
  return (
    <a
      className={`btn btn-${buttonColor} transition hover:scale-105`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {platform}
    </a>
  );
}

export default SocialButton;
    