import { createContext, useState } from "react";

export const CatalogueContext = createContext([])

export const CatalogueProvider = ({ children }) =>{
    const [ catalogue, setCatalogue ] = useState([
        
        {id:1,name:"Iphone X", img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-dmd_Ci66XErpkAzJ8DEQr6_aYfp5FkSxA&usqp=CAU', price:500  },
        {id:2,name:"Moto G 10", img:'https://brmotorolanew.vtexassets.com/arquivos/ids/157347/Smartphone-Moto-G10-64-GB-foto-01.png?v=637522311518930000', price:300  },
        {id:3,name:"Xiaomi Note 8", img:'https://www.americaphone.com.br/wp-content/uploads/2019/12/redmi-note-8-128gb.png', price:200  },
        {id:4,name:"Samsung", img:'https://images.samsung.com/is/image/samsung/p6pim/br/sm-m127fzkkzto/gallery/br-galaxy-m12-m127-sm-m127fzkkzto-thumb-423912206?$320_320_PNG$', price:100  },
        {id:5,name:"Xiaomi X", img:'https://melhorcelular.org/wp-content/uploads/2020/12/Xiaomi-Mi-10T-Pro-2.png', price:50  }

    ])

    const addToCatalogue = (item) =>{
        setCatalogue([...catalogue, item])
    }

    const removeFromCatalogue = (item) =>{
        const newCatalogue = catalogue.filter((elemento)=>elemento.id !== item.id)
        setCatalogue(newCatalogue)
    }

    return(
        <CatalogueContext.Provider value={{ catalogue, addToCatalogue, removeFromCatalogue}}>
            { children }
        </CatalogueContext.Provider>
    )
}