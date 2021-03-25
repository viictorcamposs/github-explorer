interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Repository Name Error'}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url} target="_blank">
        Go to repository
      </a>
    </li>
  );
};