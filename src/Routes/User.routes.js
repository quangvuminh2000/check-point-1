import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MenuBar } from '../Components';
import { InputPage } from '../Pages/InputPage';
import { OutputPage } from '../Pages/OutputPage';


const UserRoute = () => {
	return (
		<>
			<MenuBar />
			<Routes>
				<Route exact path='/input' element={<InputPage/>} />
				<Route exact path='/' element={<Navigate to='/input'/>} />
				<Route exact path='/output' element={<OutputPage/>} />
			</Routes>
		</>
	)
}

export default UserRoute;

