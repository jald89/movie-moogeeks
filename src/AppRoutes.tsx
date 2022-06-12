import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Spinner from './components/atoms/Spinner'
import HomePage from './components/pages/HomePage'
import MyListPage from './components/pages/MyListPage'
import React from 'react'

const MoviePage = React.lazy(() => import('./components/pages/MoviePage'))

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route 
                path="/"
                element={<HomePage />}
            >
                <Route path="search" element={<HomePage />}>
                    <Route path=":search" element={<HomePage />} />
                </Route>
            </Route>
            <Route
                path="movie/:id"
                element={
                <React.Suspense fallback={<Spinner />}>
                    <MoviePage />
                </React.Suspense>
                }
            />
            <Route
                path="mylist"
                element={
                <React.Suspense fallback={<Spinner />}>
                    <MyListPage />
                </React.Suspense>
                }
            />
            <Route path='*' element={<><Spinner title='404' /></>} />
        </Routes>
    </BrowserRouter>
)

export default AppRoutes
