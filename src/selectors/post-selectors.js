export const getAllPosts = state => {
  console.log('shoudl be posts state', state);
  return state.posts.map((post, index) => ({
    ...post,
    index
  })); 
};

export const getPostByIndex = (state, index) => {
  return getAllPosts(state)[index];
};
