import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService';

export default function ProductDetail() {
    let { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(()=>{
        let productService = new ProductService();
        productService.getById(id).then(result=> setProduct(result.data.data));
    },[]);

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='large'
                            src='https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png'
                        />
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>{product.category.categoryName}</Card.Meta>
                        <Card.Description>
                            {product.quantityPerUnit}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Sepete Ekle
                            </Button>
                            <Button basic color='red'>
                                Favorilere Ekle
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
