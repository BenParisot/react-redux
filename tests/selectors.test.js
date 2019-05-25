import { createStore } from 'redux';
import { createComment } from '../src/actions/comments-actions';
import { createPost } from '../src/actions/post-actions';
import reducer from '../src/reducers';
import { getAllPosts, getPostByIndex } from '../src/selectors/post-selectors';
import { getCommentsByPost } from '../src/selectors/comment-selectors';

describe('blog comments', () => {
  const store = createStore(reducer);

  store.dispatch(createPost('yup', 'this is a post'));
  store.dispatch(createPost('nope', 'this is not a post'));
  store.dispatch(createPost('maybe', 'this is a post?'));
  store.dispatch(createPost('dunno', 'wtf is this'));

  store.dispatch(createComment(0, 'bang up job'));
  store.dispatch(createComment(0, 'good job'));
  store.dispatch(createComment(1, 'nice job'));
  store.dispatch(createComment(1, 'wonderful job'));
  store.dispatch(createComment(2, 'terrible job'));
  store.dispatch(createComment(3, 'i want a job'));

  it('gets all posts', () => {
    expect(getAllPosts(store.getState())).toHaveLength(4);
  });

  it('gets a post by index', () => {
    expect(getPostByIndex(store.getState(), 2)).toEqual({
      title: 'maybe',
      body: 'this is a post?',
      id: 2
    });
  });

  it('gets all comments of a specific post', () => {
    console.log(store.getState());
    expect(getCommentsByPost(store.getState(), 1)).toHaveLength(2);
  });
});
