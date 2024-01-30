import Link from 'next/link'
import styles from 'styles/UserList.module.css'

const UsersList = ({ users }) => {
  return (
    <div className={styles['user-list-container']}>
      <h1 className={styles['user-list-heading']}>ユーザーリスト</h1>
      <ul>
        {users.map((user, index) => (
          <li key={user.id} className={styles['user-list-item']}>
            <Link
              href={`/users/${user.id}`}
              className={styles['user-list-link']}
            >
              {index + 1}.{user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}
