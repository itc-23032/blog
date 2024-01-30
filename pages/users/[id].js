import React from 'react'
import styles from 'styles/UserDetails.module.css'

const UserDetails = ({ user, todos }) => (
  <div className={styles['user-details-container']}>
    <img
      src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      alt='Profile'
      className={styles['user-profile-image']}
    />
    <h1 className={styles['user-details-heading']}>User Details</h1>
    <p className={styles['user-details-info']}>ID: {user.id}</p>
    <p className={styles['user-details-info']}>Name: {user.name}</p>
    <p className={styles['user-details-info']}>Email: {user.email}</p>
    <p className={styles['user-details-info']}>
      Address: {user.address.street}, {user.address.suite}, {user.address.city},{' '}
      {user.address.zipcode}
    </p>
    <br />
    <br />

    <h2 className={styles['user-details-heading']}>やることリスト</h2>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.completed ? '⭕' : '❌'} {todo.title}
        </li>
      ))}
    </ul>
  </div>
)

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  const paths = users.map(user => ({
    params: { id: user.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const [userResponse, todosResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${params.id}`)
  ])

  const user = await userResponse.json()
  const todos = await todosResponse.json()

  return {
    props: {
      user,
      todos
    }
  }
}

export default UserDetails
