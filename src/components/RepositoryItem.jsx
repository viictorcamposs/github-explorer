export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name ?? 'Repository Name Error'}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url} target="_blank">
        Go to repository
      </a>
    </li>
  );
};