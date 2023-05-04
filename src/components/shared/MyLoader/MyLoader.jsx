import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={320}
    height={400}
    viewBox="0 0 320 400"
    backgroundColor="#363636"
    foregroundColor="#d9d9d9"
    {...props}
  >
    <rect x="7" y="3" rx="0" ry="0" width="180" height="65" />
    <rect x="8" y="77" rx="0" ry="0" width="181" height="13" />
    <rect x="8" y="103" rx="0" ry="0" width="181" height="13" />
    <rect x="8" y="129" rx="0" ry="0" width="181" height="13" />
    <rect x="7" y="155" rx="0" ry="0" width="181" height="13" />
  </ContentLoader>
);

export default MyLoader;
