import { v4 as uuid } from "uuid"

type Props<T> = {
  label: string
  entities: T[]
  setEntities: (items: T[]) => void
  getLabel: (item: T) => string
  onCreate: () => T
}

export default function EntityPanel<T>({
  label,
  entities,
  setEntities,
  getLabel,
  onCreate,
}: Props<T>) {
  return (
    <div className="card bg-base-200 shadow-md p-4 m-2">
      <div className="flex justify-between items-center">
        <h2 className="card-title">{label}</h2>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => setEntities([...entities, onCreate()])}
        >
          Add
        </button>
      </div>
      <ul className="mt-2 space-y-1">
        {entities.map((item, idx) => (
          <li key={idx} className="p-2 bg-base-100 rounded">
            {getLabel(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}
