import styled from 'styled-components';

const CommentContainer = styled.div`
  margin-bottom: 24px; 
  border-bottom: 1px solid grey;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CommentHeader = styled.div`
  margin-bottom: 8px;
`;

const UserName = styled.strong`
  margin-right: 8px;
  font-weight: bold;
`;

const DateTime = styled.small`
  color: gray;
`;

const CommentContent = styled.p`
  margin-bottom: 0;
`;
const ProductComment = ({ comments }) => {
  return (
    <div style={{margin:"100px", border:"1px solid black", padding:"20px" }}>
    <h2>Comments</h2>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {comments.map((comment) => (
        <CommentContainer key={comment.id}>
          <CommentHeader>
            <UserName>{comment.user}</UserName>
            <DateTime>{comment.datetime}</DateTime>
          </CommentHeader>
          <CommentContent>{comment.content}</CommentContent>
        </CommentContainer>
      ))}
    </ul>
  </div>
);
};

export default ProductComment;
