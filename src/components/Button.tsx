type ButtonProps = {
    label?:string
}

export function Button({label}:ButtonProps) {
    return <button>{label || "Clique aqui"}</button>
}
