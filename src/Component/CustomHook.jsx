import { useFetch } from '../Hooks/useFetch';
import { useCounter } from '../Hooks/useCounter';
import { LoadingMessage } from './Loading';
import { PokemonCard } from './Card';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    
    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr/>
            <h2>{data?.name}</h2>
            {isLoading ? <LoadingMessage/>
                        : (<PokemonCard id={counter} name={data.name} sprites={ [
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
            ] } />)}
            
            <button className='btn btn-primary' onClick= { ()=>decrement() } >Anterior</button>
            <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
        </>
    )
}
