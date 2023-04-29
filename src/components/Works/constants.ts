import HealthCareApp from "../../../public/images/health-care-app.webp";
import CrusLanding from "../../../public/images/crus.webp";
import HealthCareAdminApp from "../../../public/images/health-care-admin-app.webp";
import LocalizationToolApp from "../../../public/images/localization-tool.webp";
import WatchCommerce from "../../../public/images/watch-commerce.webp";
import ELearningPanel from "../../../public/images/e-learning-panel.webp";
import { CaseItem } from "@/slices/ui";

export const works = [
    {
        image: HealthCareApp,
        title: "Health care App",
        description: "UI/UX Design & Development",
        app: CaseItem.HEALTHCARE_APP,
    },
    {
        image: CrusLanding,
        title: "Charity Landing page",
        description: "UI/UX Design & Development",
        app: CaseItem.CFUS,
    },
    {
        image: HealthCareAdminApp,
        title: "Laboratory Management System",
        description: "Web Design & Development",
        app: CaseItem.HEALTHCARE_ADMIN,
    },
    {
        image: LocalizationToolApp,
        title: "Localization Web app",
        description: "Web Design & Development",
        app: CaseItem.LOCALIZATION_ADMIN,
    },
    {
        image: ELearningPanel,
        title: "Brand Landing page",
        description: "Web Design & Development",
        app: CaseItem.WATCHES,
    },
    {
        image: WatchCommerce,
        title: "e-Learning Web app",
        description: "Web Design & Development",
        app: CaseItem.E_LEARNING_APP,
    },
];
