import styled from '@emotion/styled';

const StoreInformationGroupsStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: left;
    width: 90%;
`;

const StoreInformationTitle = styled.p`
    color: #535FC1;
    font-weight: bold;
    align-self: flex-start;
    margin-bottom: 0.4rem;
    margin-top: 0.9rem;
`;

const StoreInformationContent = styled.div`
    background-color: #F2F0F0;
    font-size: 0.85rem;
    min-width: 100%;
    min-height: 12vh;
`;

const ContentPadding = styled.div`
    padding: 1rem 1rem;
`

interface StoreInformationGroupsProps {
    storeInformationTitle: string;
    storeInformationContent: string;
}

export function StoreInformationGroups({ storeInformationTitle, storeInformationContent }: StoreInformationGroupsProps) {
    return (
        <StoreInformationGroupsStyled>
            <StoreInformationTitle>
                {storeInformationTitle}
            </StoreInformationTitle>
            <StoreInformationContent>
                <ContentPadding>
                    {storeInformationContent}
                </ContentPadding>
            </StoreInformationContent>
        </StoreInformationGroupsStyled>
    )
}