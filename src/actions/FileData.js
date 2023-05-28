export const FileDataAction = (data) => {
  return {
    type: "FILEDATA",
    payload: {
      id: new Date().getTime().toString(),
      filedata: data,
    },
  };
};
