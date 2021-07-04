export const getCommentsByPost = (state, index) => {
  return state.comments[index] || []; 
}; 
