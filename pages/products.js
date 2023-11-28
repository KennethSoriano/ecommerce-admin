import Layout from "@/components/Layout";
import Link from "next/link";
import NewProduct from "./products/new";
import { useEffect, useState } from "react";
import axios from "axios";

export default function products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/products').then(response => {
            setProducts(response.data);
        })
    }, []);
    return (
        <Layout>
            <Link className="bgblue-900 text-white rounded-md py-1 px-2" href={'/products/new'}>Add new product</Link>
            <table className="basic">
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </Layout>
    )
}