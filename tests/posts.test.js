import { createStore } from 'redux';
import { createPost, deletePost } from '../src/actions/post-actions';
import reducer from '../src/reducers/post-reducers';

describe('blog posts', () => {
  const store = createStore(reducer);
    
  it('creates a blog post', () => {
    store.dispatch(createPost('My First Post', 'Hello world!'));
    expect(store.getState()).toEqual([{ title: 'My First Post', body: 'Hello world!' }]);
  });

  it('deletes a blog post', () => {
    store.dispatch(createPost('Another Post', 'Hello world!'));
    store.dispatch(createPost('Yet Another Post', 'Hello world!'));
    store.dispatch(createPost('My Fourth Post', 'Hello world!'));
    store.dispatch(deletePost(2));
    expect(store.getState()).toHaveLength(3);
  });
});
