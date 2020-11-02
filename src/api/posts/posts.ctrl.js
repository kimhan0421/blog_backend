let postId = 1;
// 초기데이터

//배열 초기 데이터
const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

//포스트 작성
exports.write = (stx) => {
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

//포스트 목록조회
exports.list = (ctx) => {
  ctx.body = posts;
};

//특정 포스트 조회
exports.read = (ctx) => {
  const { id } = ctx.params;
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      messaye: '포스트가 존재하지 않습니다',
    };
    return;
  }
  ctx.body = posts;
};
