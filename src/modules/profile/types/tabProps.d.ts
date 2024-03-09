
interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
    label: string;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}