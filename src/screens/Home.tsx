import { Product } from "../../src/components/product";


export const Home = () => {

    return (
        <div>
            <h1 className="text-6xl font-medium text-center">
            Nuevas promociones disponibles
            </h1>
            <Product />
        </div>
    )
}