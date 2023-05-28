const FileData = {
  filedata: {},
};
const FileDataReducer = (state = FileData, action) => {
  switch (action.type) {
    case "FILEDATA":
      const { id, filedata } = action.payload;
      return filedata;

      break;

    default:
      return state;
  }
};

export default FileDataReducer;
