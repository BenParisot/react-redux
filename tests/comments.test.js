import { createStore } from 'redux';
import { createComment, deleteComment } from '../src/actions/comments-actions';
import reducer from '../src/reducers/comment-reducers';

describe('blog comments', () => {
  const store = createStore(reducer);
    
  it('creates a blog comment', () => {
    store.dispatch(createComment(2, 'nice post!'));
    expect(store.getState()).toEqual({ '2': ['nice post!'] });
  });

  it('deletes a blog comment', () => {
    store.dispatch(createComment(2, 'nice work!'));
    store.dispatch(createComment(2, 'bad blog'));
    store.dispatch(createComment(1, 'cool blog!'));
    store.dispatch(deleteComment(2, 1));
    expect(store.getState()).toEqual({ '1': ['cool blog!'], '2': ['nice post!', 'bad blog'] });
  });
});
