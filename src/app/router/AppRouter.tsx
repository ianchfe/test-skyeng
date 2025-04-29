import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage} from "../../pages/MainPage";
import { AnalyticsPage} from "../../pages/AnalyticsPage";
import {Layout} from "../../shared/ui/Layout";

export const AppRouter = () => {
    return (
        <BrowserRouter basename="/test-skyeng">
            <Routes >
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/analytics" element={<AnalyticsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
