import styled from '@emotion/styled';

import { CategoryButtons } from './CategoryButtons';

const AllCategory = styled.div`
    display: flex;
    gap: 0.5rem 2rem;
    flex-wrap: wrap;
    justify-content: center;
`;

interface AllCategoriesProps {
    className?: string;
}

// 하드코딩되어 있는 코드들은 후에 데이터베이스 연결로 수정할 예정입니다.
export function AllCategories({ className }: AllCategoriesProps) {
    return (
        <AllCategory className = {className}>
            <CategoryButtons categoryNameProp='🍺 술집'/>
            <CategoryButtons categoryNameProp='🎡 놀거리'/>
            <CategoryButtons categoryNameProp='🏥 병원'/>
            <CategoryButtons categoryNameProp='🍹 음료/디저트'/>
            <CategoryButtons categoryNameProp='🚘 공유모빌리티'/>
            <CategoryButtons categoryNameProp='💪🏻 헬스장 및 필라테스'/>
            <CategoryButtons categoryNameProp='📕 서점'/>
            <CategoryButtons categoryNameProp='🍚 음식점'/>
            <CategoryButtons categoryNameProp='🚬 전자담배'/>
            <CategoryButtons categoryNameProp='💆🏻‍♀️ 스파/마사지'/>
            <CategoryButtons categoryNameProp='👓 안경/렌즈'/>
            <CategoryButtons categoryNameProp='💈 네일샵 및 헤어샵'/>
        </AllCategory>
    )
}