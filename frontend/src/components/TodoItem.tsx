export function TodoItem({ titre, done }: TodoItemProps) {    return (


        <p style={{ textDecoration: done ? 'line-through' : 'none' }}>{titre}</p>

    );
}

interface TodoItemProps {
    titre: string;
    done: boolean;
}