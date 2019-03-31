import React from 'react'
import menuConfig from '../../config/menuConfig'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import './index.less'

const SubMenu = Menu.SubMenu

export default class NavLeft extends React.Component{
    componentWillMount(){
        const menuTreeNode = this.renderMenu(menuConfig)
        this.setState({menuTreeNode})
    }
    renderMenu=(data)=>{
        return data.map((item)=>{
            
        })
        }
    }
}
