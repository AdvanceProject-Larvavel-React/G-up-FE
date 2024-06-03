const imgStyle={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "10px",
}
export const ImageProd = (props) => {
  const { file_paths } = props.prod;
  return (<img className="" src={file_paths} alt="" style={imgStyle} />);
};
