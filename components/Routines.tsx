import { NextPage } from "next"

interface Routine {
    id: Number
    createdAt: String
    updatedAt: String
    name: String
    uuid: String
}

const Routines: NextPage<{ data: Routine[] }> = ( { data } ) => {
    return (
        <div>
            {data.map((routine) => (
                <div key={String(routine.id)}>
                    <p>{routine.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Routines;