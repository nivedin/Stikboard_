import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader 
    speed={2}
    width={500}
    height={460}
    viewBox="0 0 500 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="31" cy="31" r="15" /> 
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="25" y="56" rx="0" ry="0" width="100%" height="433" />
  </ContentLoader>
)

export default Loader