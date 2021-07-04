import { createStore } from 'redux';
import { createComment } from '../src/actions/comments-actions';
import reducer from '../src/reducers/comment-reducers';

describe('blog comments', () => {
  const store = createStore(reducer);
    
  it('creates a blog comment', () => {
    store.dispatch(createComment(2, 'nice post!'));
    expect(store.getState()).toEqual({ '2': ['nice post!'] });
  });
});
