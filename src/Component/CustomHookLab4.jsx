import { useFetch } from '../Hooks/useFetch';
import { useCounter } from '../Hooks/useCounter';
import { LoadingMessage } from './Loading';
import { Card } from './CardLab4';

export const CustomHookLab4 = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://gsi.fly.dev/characters/${counter}`);
    const character = data?.result;

    return (
        <>
            <h1>Información</h1>
            <hr />

            {isLoading ? (
                <LoadingMessage />
            ) : (
                data && (
                    <>
                        <Card
                            id={counter}
                            name={character.name}
                            title={character.title} 
                        />
                    </>
                )
            )}

            <button className="btn btn-primary" onClick={() => decrement()}>Anterior</button>
            <button className="btn btn-primary" onClick={() => increment()}>Siguiente</button>
        </>
    );
};
