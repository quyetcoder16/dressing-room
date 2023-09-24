import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tryOnclothesAction } from '../redux/actions/dressingRoomActions';

export default function NavDressingRoom() {

    const { dataRenderNav } = useSelector(state => state.dressingRoomReducer);

    const dispatch = useDispatch();

    const renderNavPill = () => {
        return dataRenderNav.navPills.map((navItem, index) => {
            let nameHref = `#${navItem.tabName}`;
            if (index === 0) {
                return (<li key={index} className="nav-item">
                    <a className="nav-link active  btn-default" data-toggle="pill" href={nameHref}>{navItem.showName}</a>
                </li>);
            }
            return (<li key={index} className="nav-item">
                <a className="nav-link btn-default" data-toggle="pill" href={nameHref}>{navItem.showName}</a>
            </li>);
        });
    }

    const renderTabPanes = (type) => {
        return dataRenderNav.tabPanes.map((itemTabPanes, index) => {
            if (itemTabPanes.type === type) return (<div className="col-md-3" key={index}>
                <div className="card text-center">
                    <img src={itemTabPanes.imgSrc_jpg} alt={itemTabPanes.name} />
                    <h4><b>{itemTabPanes.name}</b></h4>
                    <button onClick={() => {
                        dispatch(tryOnclothesAction(itemTabPanes));
                    }}>Thử đồ</button>
                </div>
            </div>);
            return null;
        })
    }

    const renderTabContent = () => {
        return dataRenderNav.navPills.map((navPillItem, index) => {
            if (index === 0) {
                return (<div key={index} className="tab-pane container active" id={navPillItem.tabName}>
                    <div className='container'>
                        <div className='row'>
                            {renderTabPanes(navPillItem.type)}
                        </div>
                    </div>
                </div>)
            }
            return (<div key={index} className="tab-pane container fade" id={navPillItem.tabName}>
                <div className='container'>
                    <div className='row'>
                        {renderTabPanes(navPillItem.type)}
                    </div>
                </div>
            </div>)
        })
    }

    return (
        <div>
            <div>
                <ul className="nav nav-pills">
                    {renderNavPill()}
                </ul>

                <div className="well">
                    {/* Tab panes */}
                    <div className="tab-content">
                        {renderTabContent()}
                    </div>
                </div>
            </div>

        </div>
    )
}
