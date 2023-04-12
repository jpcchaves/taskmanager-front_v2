export const generateAvatar = (
  username: string,
  foregroundColor: string,
  backgroundColor: string
): string => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 200;
  canvas.height = 200;

  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = "bold 100px Assistant";
  context.fillStyle = foregroundColor;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(username, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL("image/png");
};
