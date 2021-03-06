import React from 'react'
import styled from 'styled-components'
const Add = styled.button`
  align-self: center;
  position: absolute;
  left: 20%;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 20px;
  padding: 50px 0;
  text-align: center;

  h2 {
    text-align: center;
    font-size: 1.500rem;
  }

  button {
    width: 50px;
    height: 20px;
    border: 1px solid black;
    margin: 50px 0;
  }
`

const Posts = props => {
  return (
    <Container>
      <Add
        onClick={() => {
          props.history.push('/form/postform')
        }}
      >
        ADD
      </Add>
      {props.posts.map(post => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.contents}</p>
            <button
              onClick={() => {
                props.getById(post.id)
                props.history.push(`/posts/${post.id}`)
              }}
            >
              VIEW
            </button>
          </div>
        )
      })}
    </Container>
  )
}

export default Posts
