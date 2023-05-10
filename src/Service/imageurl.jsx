import img from "../Image/NoImg.webp";
const getsmallUrl = (url) => {
  if (!url) return img;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getsmallUrl;
