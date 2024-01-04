import {
    StatsSection,
    StatsTitle,
    StatisticsItem,
    StatisticsLabel,
    StatisticsPercentage,
    Container
} from './Statistics.styled'

import PropTypes from 'prop-types'; 

export const Stactics = ({ title, stats }) => {
    
    return (
        <Container>
   {title && <StatsTitle> {title}</StatsTitle>}
            <StatsSection>          
 {stats.map(({id, label, percentage}) => (
     <StatisticsItem key={id}>
 <StatisticsLabel>{label}</StatisticsLabel>
 <StatisticsPercentage>{percentage}</StatisticsPercentage>
 </StatisticsItem>
  
            )
            )}
     </StatsSection>        
        </Container>
)
}

Stactics.prototypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
    })
    )

}