---
source: ECON442_lecture11.pdf
type: pdf
original_path: 国际经济学课上知识/ECON442_lecture11.pdf
---

ECO 442: Quantitative Trade Models
Jack Rossbach

Basic Ricardian Model
Dornbusch, Fisher, Samuelson (1979)
• Ricardian model with 2 countries, 1 factor of production, and a continuum of goods
• Countries differ in relative productivities for producing different goods
• Open to trade ⇒countries to specialize in the goods they have comparative advantages in
Difficulty: How to extend to a multi-country framework?

Comparative Advantage in Ricardian Models
Let country 𝑖produce good 𝑘with unit labor cost 𝑎𝑘
𝑖,  i.e. 𝑦= 𝑙𝑖,𝑘,/𝑎𝑘
𝑖
With N goods and 2 countries, can order goods by relative comparative advantage
𝑎1
1/𝑎1
2 < 𝑎2
1/𝑎2
2 < ⋯< 𝑎𝑁
1 /𝑎𝑁
2
Similarly with 2 goods and J countries, can order countries by relative comparative advantage
𝑎1
1/𝑎2
1 < 𝑎1
2/𝑎2
2 < ⋯< 𝑎1
𝐽/𝑎2
𝐽
In both cases, there will be a cutoff in the chains that determines patterns of production
• In first chain, country 1 will specialize in goods to left of cutoff, country 2 in goods to right
• In second chain, countries to left of cutoff will produce good 1, countries to right good 2

Comparative Advantage in Ricardian Models
Let country 𝑖produce good 𝑘with unit labor cost 𝑎𝑘
𝑖,  i.e. 𝑦= 𝑙𝑖,𝑘,/𝑎𝑘
𝑖
With N goods and 2 countries, can order goods by relative comparative advantage
𝑎1
1/𝑎1
2 < 𝑎2
1/𝑎2
2 < ⋯< 𝑎𝑁
1 /𝑎𝑁
2
Similarly with 2 goods and J countries, can order countries by relative comparative advantage
𝑎1
1/𝑎2
1 < 𝑎1
2/𝑎2
2 < ⋯< 𝑎1
𝐽/𝑎2
𝐽
In both cases, there will be a cutoff in the chains that determines patterns of production
Difficulty: How to construct such chains with N goods and J countries?

Comparative Advantage in Multi-dimensional Ricardian Models
Difficulty: How to construct such chains with N goods and J countries?  Potential Solutions:
• Jones (1961): Look at environments in which each country produces only one good
• Wilson (1980): No need to predict pattern of trade, can determine comparative statics such as 
changes in prices and welfare without it.
• Costinot (2009): Restrict attention to environments in which unit labor costs are log-submodular 
in good characteristics and country characteristics, so comparative advantage chains can be 
constructed
• Eaton-Kortum (2002): Assume productivities are drawn from a Frechet distribution.  Like Wilson, 
doesn’t predict pattern of trade for individual goods, but can predict aggregate trade flows and 
comparative statics much simpler and better suited for empirical work.

Eaton and Kortum (2002)
Basic Framework (notational change to be consistent with paper)
• Continuum of goods 𝑗∈0,1
• 𝑖, 𝑛= 1,2, … , 𝑁countries
• Wages in country 𝑖: 𝑤𝑖
• Good specific productivity in country 𝑖: 𝑧𝑖𝑗⇒cost of producing good 𝑗in country 𝑖is 𝑤𝑖/𝑧𝑖𝑗
• Iceburg trade costs to ship a good from country 𝑖to country 𝑛: 𝑑𝑛𝑖> 1 for 𝑖≠𝑛(𝑑𝑖𝑖= 1)
• Perfect competition ⇒price charged by firms in country 𝑖to consumers in country 𝑛for good 𝑗
𝑝𝑛𝑖𝑗=
𝑤𝑖
𝑧𝑖𝑗
𝑑𝑛𝑖

Consumers and Prices
Consumers have CES preferences over goods and maximize utility
max 𝑈𝑛= න
0
1
𝑄𝑛𝑗
𝜎−1
𝜎𝑑𝑗
𝜎
𝜎−1
Where 𝑄𝑛𝑗is the quantity of good 𝑗consumed in country 𝑛.
Total expenditures of country 𝑛are denoted 𝑋𝑛
𝑋𝑛≡න
0
1
𝑝𝑛𝑗𝑄𝑛𝑗𝑑𝑗

Consumers and Prices
Consumers have CES preferences over goods and maximize utility
max 𝑈𝑛= න
0
1
𝑄𝑛𝑗
𝜎−1
𝜎𝑑𝑗
𝜎
𝜎−1
Where 𝑄𝑛𝑗is the quantity of good 𝑗consumed in country 𝑛.
Total expenditures of country 𝑛are denoted 𝑋𝑛
𝑋𝑛≡න
0
1
𝑝𝑛𝑗𝑄𝑛𝑗𝑑𝑗
Budget constraint says Expenditures=Income, therefore can write
𝑋𝑛= 𝑤𝑛𝐿𝑛

Consumers and Prices
The price of good 𝑗in country 𝑛is the minimum price across producers in all countries
𝑝𝑛𝑗= min 𝑝𝑛1 𝑗, 𝑝𝑛2 𝑗, … , 𝑝𝑛𝑁𝑗
= min
𝑤1
𝑧1 𝑗
𝑑𝑛1,
𝑤2
𝑧2 𝑗
𝑑𝑛2, … ,
𝑤𝑁
𝑧𝑁𝑗
𝑑𝑛𝑁
Where 𝑝𝑛𝑖𝑗is the price to ship one unit of good 𝑗from country 𝑖to country 𝑛

Firm’s Problem
Firm’s in country 𝑖draw a random productivity, 𝑧𝑖𝑗, to produce good 𝑗
Firms maximize profit by deciding how much to produce for each country 𝑛
max ෍
𝑛
𝑝𝑛𝑖𝑗𝑦𝑛𝑖𝑗−𝑤𝑖𝑙𝑛𝑖𝑗
Subject to their production function
𝑦𝑛𝑖𝑗= 𝑧𝑖𝑗𝑙𝑛𝑖𝑗
Where 𝑧𝑖𝑗is country 𝑖’s productivity for producing good 𝑗
• Key Trick: Productivity is going to come from a specific probability distribution

Market Clearing
Goods market clears
𝑄𝑛𝑖𝑗= 𝑦𝑛𝑖𝑗
Labor Market Clears
න
𝑗
෍
𝑖
𝑙𝑛𝑖𝑗𝑑𝑗= 𝐿𝑛

Frechet Productivity Distribution
Assume productivity in country 𝑖follows a Frechet 𝑇𝑖, 𝜃distribution
𝐹𝑖𝑧= 𝑃𝑍≤𝑧= 𝑒−𝑇𝑖𝑧−𝜃
• 𝑇𝑖> 0 governs the location of the productivity distribution for country 𝑖.
• Higher 𝑇𝑖⇒higher productivity draw more likely for any good 𝑗
• 𝜃> 0 governs variation in the productivity distribution (common across countries)
• Higher 𝜃⇒less variability across goods (governs degree of comparative advantage)
• sd log 𝑧= 𝜋/ 𝜃6 ;  Geometric Mean = 𝑒γ/𝜎𝑇𝑖
1/𝜃(γ ≈.577, Euler’s constant)

Key Property of Frechet Productivity Distribution
Why the Frechet distribution?
• The Frechet distribution is an Extreme Value (type II) distribution and is max stable
• Suppose 𝑍1, 𝑍2, … , 𝑍𝑁follow Frechet 𝑇𝑖, 𝜃distributions.  Define 𝑍max = max 𝑍1, 𝑍2, … , 𝑍𝑁, then
𝐹max 𝑧= 𝑒−σ𝑖=1
𝑁
𝑇𝑖𝑧𝜃= 𝑒−𝑧𝜃σ𝑖=1
𝑁
𝑇𝑖
So therefore 𝑍max~Frechet σ𝑖=1
𝑁
𝑇𝑖, 𝜃

Key Property of Frechet Productivity Distribution
Why the Frechet distribution?
• The Frechet distribution is an Extreme Value (type II) distribution and is max stable
• Suppose 𝑍1, 𝑍2, … , 𝑍𝑁follow Frechet 𝑇𝑖, 𝜃distributions.  Define 𝑍max = max 𝑍1, 𝑍2, … , 𝑍𝑁, then
𝐹max 𝑧= 𝑒−σ𝑖=1
𝑁
𝑇𝑖𝑧𝜃= 𝑒−𝑧𝜃σ𝑖=1
𝑁
𝑇𝑖
So therefore 𝑍max~Frechet σ𝑖=1
𝑁
𝑇𝑖, 𝜃
• This makes the Frechet distribution great for studying environments with perfect competition as it 
makes it easy to characterize the productivity of the maximal productivity producers
• This is similar to how the Pareto distribution is great for studying extensive margins, since the 
(left) truncated Pareto distribution is still a Pareto distribution

Density of Frechet Distribution
𝑑𝐹𝑧
𝑧
𝑇𝑖= 1
𝜃= 1
𝜃= 1.5
𝜃= 2

Density of Frechet Distribution
𝑑𝐹𝑧
𝑧
𝑇𝑖= 2
𝜃= 2
𝑇𝑖= 1
𝑇𝑖= 2/3

LogLog Plot of CCDF of Frechet Distribution
1 −𝐹𝑧
𝑧
𝜃= 2, 𝑇𝑖= 1
Right tail obeys a power law:  𝑃𝑍> 𝑧= 1 −𝑒−𝑇𝑖𝑧−𝜃≈𝑇𝑖𝑧−𝜃for large 𝑧

Steps to Solving Model
• Determine distribution of prices in country 𝑛
• Determine probability each country buys a good from another country
• Determine aggregate trade flows between all country pairs
• Relate wages to prices and trade flows
• Solve numerically for wages and trade flows

Distribution of Prices
Distribution of prices offered by firms in country 𝑖governed by productivity distribution
• Define 𝐺𝑛𝑖𝑝as the proportion of prices offered by country 𝑖to country 𝑛that are less than 𝑝
• Recall 𝑝𝑛𝑖𝑗=
𝑤𝑖
𝑧𝑖𝑗
𝑑𝑛𝑖, therefore
𝐺𝑛𝑖𝑝= Pr 𝑃𝑛𝑖< 𝑝= Pr 𝑍> 𝑤𝑖
𝑝𝑑𝑛𝑖
= 1 −𝐹𝑖𝑤𝑖𝑑𝑛𝑖/𝑝= 1 −𝑒−𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃𝑝𝜃

Distribution of Prices
Distribution of prices offered by firms in country 𝑖governed by productivity distribution
• Define 𝐺𝑛𝑖𝑝as the proportion of prices offered by country 𝑖to country 𝑛that are less than 𝑝
• Recall 𝑝𝑛𝑖𝑗=
𝑤𝑖
𝑧𝑖𝑗
𝑑𝑛𝑖, therefore
𝐺𝑛𝑖𝑝= Pr 𝑃𝑛𝑖< 𝑝= Pr 𝑍> 𝑤𝑖
𝑝𝑑𝑛𝑖
= 1 −𝐹𝑖𝑤𝑖𝑑𝑛𝑖/𝑝= 1 −𝑒−𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃𝑝𝜃
Lowest price in country 𝑛will be 𝑝𝑛such that 𝑝𝑛𝑖≥𝑝𝑛∀𝑖(with equality for one 𝑖).
• Let 𝐺𝑛𝑝be share of (minimal) prices offered in country 𝑛that are less than 𝑝
𝐺𝑛𝑝= 1 −ෑ
𝑖=1
𝑁
1 −𝐺𝑛𝑖𝑝
= 1 −ෑ
𝑖=1
𝑁
𝑒−𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃𝑝𝜃= 1 −𝑒−σ𝑖=1
𝑁
𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃𝑝𝜃

Distribution of Prices
Can write the proportion of prices less than 𝑝in country 𝑛as
𝐺𝑛𝑝= 1 −𝑒−Φ𝑛𝑝𝜃,
where Φ𝑛= ෍
𝑖=1
𝑁
𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃
Φ𝑛is a country specific price parameter
• 𝑇𝑖indexes how productive country 𝑖is (on average)
• 𝑤𝑖is how costly labor is in country 𝑖
• 𝑑𝑛𝑖is how expensive (iceberg costs) it is to ship output from country 𝑖to country 𝑛

Distribution of Prices
Can write the proportion of prices less than 𝑝in country 𝑛as
𝐺𝑛𝑝= 1 −𝑒−Φ𝑛𝑝𝜃,
where Φ𝑛= ෍
𝑖=1
𝑁
𝑇𝑖𝑐𝑖𝑑𝑛𝑖−𝜃
Φ𝑛is a country specific price parameter
• Only reason Φ𝑛differs across countries is due to differences in iceberg costs (𝑑𝑛𝑖)
• Note that model can handle autarky easily:  𝑑𝑛𝑖= ∞∀𝑖≠𝑛⇒Φ𝑛= 𝑇𝑛𝑤𝑛−𝜃

Location of Lowest Cost Producers
The probability that country 𝑖is the lowest cost producer of good 𝑗to country 𝑛, 𝜋𝑛𝑖, is
𝜋𝑛𝑖= න
0
∞
ෑ
𝑠=1
𝑠≠𝑖
𝑁
Pr 𝑃𝑛𝑠> 𝑝
Prob. no other country
offers a price less than 𝑝
𝑑Pr 𝑃𝑛𝑖≤𝑝
Prob. country 𝑖
offers a price ≤𝑝
= න
0
∞
ෑ
𝑠=1
𝑠≠𝑖
𝑁
1 −𝐺𝑛𝑠𝑝𝑑𝐺𝑛𝑖𝑝
= 𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃
Φ𝑛
=
𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃
σ𝑠=1
𝑁
𝑇𝑠𝑤𝑠𝑑𝑛𝑠−𝜃

Connection between Origin and Price Distribution
Note that Pr 𝑃𝑛≤
ҧ𝑝= Pr 𝑃𝑛𝑖≤
ҧ𝑝𝑃𝑛= 𝑃𝑛𝑖(i.e. distribution of prices in 𝑛doesn’t change 
conditional on knowing the lowest cost producer for country 𝑛).  
To see this note Bayes rule, therefore
Pr 𝑃𝑛𝑖≤
ҧ𝑝𝑃𝑛= 𝑃𝑛𝑖= Pr 𝑃𝑛𝑖≤
ҧ𝑝Pr 𝑃𝑛𝑖= 𝑃𝑖|𝑃𝑛𝑖≤
ҧ𝑝
Pr 𝑃𝑛= 𝑃𝑛𝑖
So therefore Pr 𝑃𝑛≤
ҧ𝑝= Pr 𝑃𝑛𝑖≤
ҧ𝑝𝑃𝑛= 𝑃𝑛𝑖is the same as writing
𝐺𝑛
ҧ𝑝= 1
𝜋𝑛𝑖
න
0
ҧ𝑝
ෑ
𝑠=1
𝑠≠𝑖
𝑁
1 −𝐺𝑛𝑠𝑝𝑑𝐺𝑛𝑖𝑝
And the RHS simplifies to
= 1
𝜋𝑛𝑖
𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃
−1
Φ𝑛
𝑒−Φ𝑛𝑝𝜃
𝑝=1
ҧ𝑝
= 1
𝜋𝑛𝑖
𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃
Φ𝑛
−𝑒−Φ𝑛ҧ𝑝𝜃−−1
= 1 −𝑒−Φ𝑛ҧ𝑝𝜃= 𝐺𝑛
ҧ𝑝

CES Price Index
The CES Price index can be derived as
𝑝𝑛=
න
0
1
𝑝𝑛𝑗
1−𝜎𝑑𝑗
1
1−𝜎
=
න
0
∞
𝑝1−𝜎𝑑𝐺𝑛𝑝
1
1−𝜎
=
න
0
∞
𝑝1−𝜎Φ𝑛𝑒−Φ𝑛𝑝𝜃𝜃𝑝𝜃−1𝑑𝑝
1
1−𝜎
Which, for 𝜎< 1 + 𝜃, can simplify to (requires a change of variables in integral to 𝑥≡𝑝𝜃Φ𝑗)
𝑝𝑛= Γ 𝜃+ 1 −𝜎
𝜃
1
1−𝜎
Φ𝑛
−1
𝜃= 𝛾Φ𝑛
−1
𝜃
Where Γ 𝑡is the Gamma function
Γ 𝑡= න
0
∞
𝑥𝑡−1𝑒−𝑥𝑑𝑥

Aggregate Bilateral Trade Flows
Model doesn’t pin down which specific goods are traded
Can compute fraction of country 𝑛’s expenditure on goods from country 𝑖
• Recall distribution of prices are independent of origin of lowest cost producer
• Therefore average expenditure per good does not depend on origin of good
𝑋𝑛𝑖
𝑋𝑛
= 𝜋𝑛𝑖=
𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃
σ𝑠=1
𝑁
𝑇𝑠𝑤𝑠𝑑𝑛𝑠−𝜃

Deriving Aggregate Trade Flows
Note that country 𝑖’s total production is
𝑄𝑖= ෍
𝑚=1
𝑁
𝑋𝑚𝑖= ෍
𝑚=1
𝑁
𝑇𝑖𝑤𝑖𝑑𝑚𝑖−𝜃
σ𝑠=1
𝑁
𝑇𝑠𝑤𝑠𝑑𝑚𝑠−𝜃𝑋𝑚
Still have
𝑋𝑛𝑖= 𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃
Φ𝑛
𝑋𝑛
Therefore
𝑋𝑛𝑖=
𝑑𝑛𝑖
𝑝𝑛
−𝜃
𝑋𝑛
σ𝑚=1
𝑁
𝑑𝑚𝑖
𝑝𝑚
−𝜃
𝑋𝑚
𝑄𝑖

Gravity in Trade Flows
Taking log of previous equation yields
log 𝑋𝑛𝑖= −log
෍
𝑚=1
𝑁
𝑑𝑚𝑖
𝑝𝑚
−𝜃
𝑋𝑚
country 𝑖fixed effect
+ 𝜃log 𝑝𝑛
country n
fixed effect
−
𝜃log 𝑑𝑛𝑖
distance between
𝑖and 𝑗
+
log 𝑋𝑛
country 𝑛′s size
+
log 𝑄𝑖
country 𝑖′s size
• Generates a gravity equation similar to the Armington framework
• Can run a gravity regression and use that to pin down 𝜃if had distance data

Equilibrium Prices
Plugging in input cost to price level yields:
𝑝𝑛= 𝛾Φ𝑛
−1
𝜃= 𝛾
෍
𝑖=1
𝑁
𝑇𝑖𝑤𝑖𝑑𝑛𝑖−𝜃
−1
𝜃
Which, given 𝑤𝑖, generally needs to be solved numerically for the 𝑝𝑖’s.  We can also write
𝑋𝑛𝑖
𝑋𝑛
= 𝜋𝑛𝑖= 𝑇𝑖
𝛾𝑑𝑛𝑖𝑤𝑖
𝑝𝑛
−𝜃

Solving Equilibrium
The equilibrium is pinned down by the following sets of equations
Balanced Trade:
𝑤𝑖𝐿𝑖= ෍
𝑛=1
𝑁
𝜋𝑛𝑖𝑤𝑛𝐿𝑛,
𝑖= 1,2, … , 𝑁
𝐁𝐢𝐥𝐚𝐭𝐞𝐫𝐚𝐥𝐓𝐫𝐚𝐝𝐞𝐅𝐥𝐨𝐰𝐬: 𝜋𝑛𝑖= 𝑇𝑖
𝛾𝑑𝑛𝑖𝑤𝑖
𝑝𝑛
−𝜃
,
𝑖, 𝑛= 1,2, … , 𝑁
𝐏𝐫𝐢𝐜𝐞𝐬: 𝑝𝑛= 𝛾෍
𝑖=1
𝑁
𝑇𝑖𝑑𝑛𝑖𝑤𝑖−𝜃
−1
𝜃
,
𝑛= 1,2, . . , 𝑁
Can solve this system of equations numerically

Extending the Model
Previous discussion takes inputs as only labor, but can depend on intermediate goods as well
Suppose that production uses a Cobb-Douglas aggregate of labor and intermediate inputs:
𝑦𝑛𝑖𝑗= 1
𝑑𝑛𝑖
𝑧𝑖𝑗
𝑙𝑛𝑖𝑗
𝛽𝑞𝑛𝑖𝑗
1−𝛽
input bundle
Where 𝑞𝑛𝑖𝑗is a CES aggregate of intermediate goods, 𝑞𝑛𝑖
𝑗
𝑗′ , used in the production of 𝑗
𝑞𝑛𝑖𝑗= න
0
1
𝑞𝑛𝑖
𝑗
𝑗′
𝜎−1
𝜎𝑑𝑗′
𝜎
𝜎−1

Closing the Model
Previous discussion takes input costs as labor, but can depend on intermediate goods as well
Suppose that production uses a Cobb-Douglas aggregate of labor and intermediate inputs:
𝑦𝑛𝑖𝑗= 1
𝑑𝑛𝑖
𝑧𝑖𝑗
𝑙𝑛𝑖𝑗
𝛽𝑞𝑛𝑖𝑗
1−𝛽
input bundle
Where 𝑞𝑛𝑖𝑗is a CES aggregate of intermediate goods, 𝑞𝑛𝑖
𝑗
𝑗′ , used in the production of 𝑗
𝑞𝑛𝑖𝑗= න
0
1
𝑞𝑛𝑖
𝑗
𝑗′
𝜎−1
𝜎𝑑𝑗′
𝜎
𝜎−1
This implies that the cost of an input bundle in country 𝑖will be equal to
𝑐𝑖= 𝑤𝑖
𝛽𝑝𝑖
1−𝛽
Where 𝑤𝑖is wages and 𝑝𝑖is the same CES price index derived earlier [before had 𝛽= 1]

Real Wage vs Domestic Share of Consumption
𝑐𝑖= 𝑤𝑖
𝛽𝑝𝑖
1−𝛽
Where 𝑤𝑖is wages and 𝑝𝑖is the same CES price index derived earlier.  Combining the above with
𝑝𝑖= 𝛾Φ𝑛
−1
𝜃
⇒
Φ𝑖= 𝑝𝑖−𝜃𝛾𝜃
𝜋𝑛𝑖= 𝑋𝑛𝑖
𝑋𝑛
= 𝑇𝑖𝑐𝑖𝑑𝑛𝑖−𝜃
Φ𝑛
⇒
𝜋𝑖𝑖= 𝑇𝑖𝑐𝑖−𝜃
Φ𝑖
Yields the following expression that can be used to deliver the relative wage
𝜋𝑖𝑖=
𝑇𝑖𝑤𝑖
𝛽𝑝𝑖
1−𝛽−𝜃
𝑝𝑖−𝜃𝛾𝜃
⇒
𝑤𝑖
𝑝𝑖
= 𝛾
−1
𝛽
𝑇𝑖
𝜋𝑖𝑖
1
𝛽𝜃

Real Wage vs Domestic Share of Consumption
𝑐𝑖= 𝑤𝑖
𝛽𝑝𝑖
1−𝛽
Where 𝑤𝑖is wages and 𝑝𝑖is the same CES price index derived earlier.  Combining the above with
𝑝𝑖= 𝛾Φ𝑛
−1
𝜃
⇒
Φ𝑖= 𝑝𝑖−𝜃𝛾𝜃
𝜋𝑛𝑖= 𝑋𝑛𝑖
𝑋𝑛
= 𝑇𝑖𝑐𝑖𝑑𝑛𝑖−𝜃
Φ𝑛
⇒
𝜋𝑖𝑖= 𝑇𝑖𝑐𝑖−𝜃
Φ𝑖
Yields the following expression that can be used to deliver the relative wage
𝜋𝑖𝑖=
𝑇𝑖𝑤𝑖
𝛽𝑝𝑖
1−𝛽−𝜃
𝑝𝑖−𝜃𝛾𝜃
⇒
𝑤𝑖
𝑝𝑖
= 𝛾
−1
𝛽
𝑇𝑖
𝜋𝑖𝑖
1
𝛽𝜃
Note that if the real wage is higher, welfare will be higher.  Can compare real wage to autarky real 
wage by noting that 𝜋𝑖𝑖
autarky = 1.  Conditional on observed 𝜋𝑖𝑖, welfare gains higher if 𝜃, 𝛽↓

Equilibrium Prices
Plugging in input cost to price level yields:
𝑝𝑛= 𝛾Φ𝑛
−1
𝜃= 𝛾
෍
𝑖=1
𝑁
𝑇𝑖𝑐𝑖𝑑𝑛𝑖−𝜃
−1
𝜃
= 𝛾
෍
𝑖=1
𝑁
𝑇𝑖𝑤𝑖
𝛽𝑝𝑖
1−𝛽𝑑𝑛𝑖
−𝜃
−1
𝜃
Which, given 𝑤𝑖, generally needs to be solved numerically for the 𝑝𝑖’s.  We can also write
𝑋𝑛𝑖
𝑋𝑛
= 𝜋𝑛𝑖= 𝑇𝑖
𝛾𝑑𝑛𝑖𝑤𝑖
𝛽𝑝𝑖
1−𝛽
𝑝𝑛
−𝜃

Labor Market Equilibrium
Labor income is equal to labor’s share of value of output
𝑤𝑖𝐿𝑖= 𝛽𝑄𝑖= 𝛽෍
𝑛=1
𝑁
𝑋𝑛𝑖= 𝛽෍
𝑛=1
𝑁
𝜋𝑛𝑖𝑋𝑛
Total expenditures in country 𝑛are
𝑋𝑛= 1 −𝛽
𝛽
𝑤𝑛𝐿𝑛
intermediate
inputs
+
𝑤𝑛𝐿𝑛
final
consumption
= 1
𝛽𝑤𝑛𝐿𝑛
Wages therefore satisfy
𝑤𝑖𝐿𝑖= ෍
𝑛=1
𝑁
𝜋𝑛𝑖𝑤𝑛𝐿𝑛

Solving Equilibrium
The equilibrium is pinned down by the following sets of equations
𝑤𝑖𝐿𝑖= ෍
𝑛=1
𝑁
𝜋𝑛𝑖𝑤𝑛𝐿𝑛,
𝑖= 1,2, … , 𝑁
𝜋𝑛𝑖= 𝑇𝑖
𝛾𝑑𝑛𝑖𝑤𝑖
𝛽𝑝𝑖
1−𝛽
𝑝𝑛
−𝜃
,
𝑖, 𝑛= 1,2, … , 𝑁
𝑝𝑛= 𝛾෍
𝑖=1
𝑁
𝑇𝑖𝑑𝑛𝑖𝑤𝑖
𝛽𝑝𝑖
1−𝛽−𝜃
−1
𝜃
,
𝑛= 1,2, . . , 𝑁
In general, this system of equations needs to be solved numerically

Special Case: Free Trade
Under free trade 𝑑𝑛𝑖= 1 ∀𝑖, 𝑛.
Therefore good prices are equalized across countries, 𝑝𝑖= 𝑝𝑛∀𝑖, 𝑛, which means
𝜋𝑛𝑖= 𝑇𝑖𝛾𝑤𝑖
𝛽𝑝𝑖
−𝛽−𝜃
And therefore
𝑤𝑖𝐿𝑖
𝑤𝑛𝐿𝑛
= 𝜋𝑖σ𝑚=1
𝑁
𝑤𝑚𝐿𝑚
𝜋𝑛σ𝑚=1
𝑁
𝑤𝑚𝐿𝑚
=
𝑇𝑖𝛾𝑤𝑖
𝛽𝑝𝑖
−𝛽−𝜃
𝑇𝑛𝛾𝑤𝑛
𝛽𝑝𝑛
−𝛽−𝜃=
𝑇𝑖𝛾𝑤𝑖
𝛽−𝜃
𝑇𝑛𝛾𝑤𝑛
𝛽−𝜃
Rearranging gives
𝑤𝑖
𝑤𝑛
=
𝑇𝑖/𝐿𝑖
𝑇𝑛/𝐿𝑛
1
1+𝜃𝛽

Special Case: Free Trade
Price is same for all countries and determined by
𝑝𝑛= 𝛾෍
𝑖=1
𝑁
𝑇𝑖𝑤𝑖
𝛽𝑝𝑖
1−𝛽−𝜃
−1
𝜃
= 𝛾෍
𝑖=1
𝑁
𝑇𝑖𝑤𝑖
𝛽𝑝𝑛
1−𝛽−𝜃
−1
𝜃
Rearranging and substituting in relative wages gives
𝑝𝑛
𝛽= 𝛾෍
𝑖=1
𝑁
𝑇𝑖𝑤𝑖
𝛽−𝜃
−1
𝜃
= 𝛾෍
𝑖=1
𝑁
𝑇𝑖
𝑤𝑛
𝑇𝑖/𝐿𝑖
𝑇𝑛/𝐿𝑛
1
1+𝜃𝛽
𝛽
−𝜃−1
𝜃
Solving for relative wages yields
𝑤𝑛
𝑝𝑛
= 𝛾
−1
𝛽𝑇𝑛
1
1+𝜃𝛽෍
𝑖=1
𝑁
𝑇𝑖
1
1+𝜃𝛽𝐿𝑘/𝐿𝑖
𝜃𝛽
1+𝜃𝛽
1
𝜃𝛽

Special Case: Free Trade — Real Wage Discussion
Note that real wages equal Real GDP per capita as GDP is 𝑤𝑖𝐿𝑖.  From our formula we have
𝑤𝑛
𝑝𝑛
= 𝛾
−1
𝛽𝑇𝑛
1
1+𝜃𝛽෍
𝑖=1
𝑁
𝑇𝑖
1
1+𝜃𝛽𝐿𝑖/𝐿𝑛
𝜃𝛽
1+𝜃𝛽
1
𝜃𝛽
Therefore country 𝑛’s GDP per capita increases under free trade if:
• Its average productivity increases 𝑇𝑛↑, both because the demand for country 𝑛’s labor 
increases and goods become cheaper
• Other countries average productivity increases 𝑇𝑖↑, 𝑖≠𝑗as goods become cheaper.  Note this 
impact scales with the size of the labor force for the foreign country.

Special Case: Autarky
In autarky 𝑑𝑛𝑖= ∞∀𝑛≠𝑖, while 𝑑𝑖𝑖= 1.  Therefore 𝜋𝑖𝑖= 1 and the third equation becomes
𝑝𝑖= 𝛾𝑇𝑖𝑤𝑖
𝛽𝑝𝑖
1−𝛽−𝜃−1
𝜃
Which rearranges to give the autarky real wage
𝑤𝑖
aut
𝑝𝑖
aut = 𝛾
−1
𝛽𝑇𝑖
1
𝛽𝜃

Special Case: Autarky
In autarky 𝑑𝑛𝑖= ∞∀𝑛≠𝑖, while 𝑑𝑖𝑖= 1.  Therefore 𝜋𝑖𝑖= 1 and the third equation becomes
𝑝𝑖= 𝛾𝑇𝑖𝑤𝑖
𝛽𝑝𝑖
1−𝛽−𝜃−1
𝜃
Which rearranges to give the autarky real wage
𝑤𝑖
aut
𝑝𝑖
aut = 𝛾
−1
𝛽𝑇𝑖
1
𝛽𝜃
Note every country is better off under free trade as
𝑤𝑛
𝑝𝑛
= 𝛾
−1
𝛽𝑇𝑛
1
1+𝜃𝛽෍
𝑖=1
𝑁
𝑇𝑖
1
1+𝜃𝛽𝐿𝑖/𝐿𝑛
𝜃𝛽
1+𝜃𝛽
1
𝜃𝛽
= 𝛾
−1
𝛽𝑇𝑛
1
𝜃𝛽෍
𝑖=1
𝑁
𝑇𝑖/𝑇𝑛
1
1+𝜃𝛽𝐿𝑖/𝐿𝑛
𝜃𝛽
1+𝜃𝛽
1
𝜃𝛽
>1 as it includes 𝑖=𝑛

Counterfactuals and Model Parameters
Need to estimate parameters of model in order to perform counterfactuals
• First need an estimate of 𝜃
• Several ways to estimate, depending on data availability (see paper).  Will present the default.
• Then, given 𝜃, can estimate 𝑇𝑖(technology) and 𝑑𝑛𝑖(geography)
• Can use parameter estimates to perform counterfactuals such as gains from moving from 
autarky to implied trade costs, or additional gains from moving to a frictionless world/further 
reducing trade costs.

Estimating Theta: Pricing Data
Can express country 𝑛’s import share from 𝑖relative to country 𝑖’s domestic consumption as
𝑋𝑛𝑖/𝑋𝑛
𝑋𝑖𝑖/𝑋𝑖
=
𝑝𝑖𝑑𝑛𝑖
𝑝𝑛
−𝜃
Which provides a relationship between normalized trade share and prices
• Use data on normalized import shares from 19 OECD countries in 1990
• Could use distance as a proxy for 𝑑𝑛𝑖
• Pricing data on 100 products across the 19 OECD countries

Estimating the Model’s Gravity Equation: Pricing Data
EK(2002)

Estimating Theta: Pricing Data
Can express country 𝑛’s import share from 𝑖relative to country 𝑖’s domestic consumption as
𝑋𝑛𝑖/𝑋𝑛
𝑋𝑖𝑖/𝑋𝑖
=
𝑝𝑖𝑑𝑛𝑖
𝑝𝑛
−𝜃
Which provides a relationship between normalized trade share and prices
• Use data on normalized import shares from 19 OECD countries in 1990
• Could use distance as a proxy for 𝑑𝑛𝑖, but distance potentially confounds 𝜃and 𝑑𝑛𝑖
• Pricing data on 50 products across the 19 OECD countries: use to estimate 𝑝𝑖𝑑𝑛𝑖/𝑝𝑛

Estimating Theta: Pricing Data
Compute logged relative prices for each country pair and good
𝑟𝑛𝑖𝑗= log 𝑝𝑛𝑗−log 𝑝𝑖𝑗
Estimate
𝑝𝑖
𝑝𝑛
= Mean −𝑟𝑛𝑖𝑗

Estimating Theta: Pricing Data
Compute logged relative prices for each country pair and good
𝑟𝑛𝑖𝑗= log 𝑝𝑛𝑗−log 𝑝𝑖𝑗
Estimate
𝑝𝑖
𝑝𝑛
= Mean −𝑟𝑛𝑖𝑗
To estimate distance, note in model 𝑟𝑛𝑖𝑗≤𝑑𝑛𝑖∀𝑗, as otherwise 𝑛could import good 𝑗from 𝑖and 
have 𝑟𝑛𝑖𝑗= 𝑑𝑛𝑖
Estimate 𝑑𝑛𝑖as the (second) highest value of 𝑟𝑛𝑖across 𝑗, so
𝐷𝑛𝑖≔log 𝑝𝑖𝑑𝑛𝑖
𝑝𝑛
=
2ndmax
j
𝑟𝑛𝑖𝑗
σ𝑗=1
50
𝑟𝑛𝑖𝑗/50

𝑫𝒏𝒊Estimate Ranges
EK(2002)

Estimating Theta: Pricing Data
Estimate the following regression:
log 𝑋𝑛𝑖/𝑋𝑛
𝑋𝑖𝑖/𝑋𝑖
= −𝜃𝐷𝑛𝑖
Import shares from bilateral trade data, noting 𝑋𝑖𝑖= 𝑋𝑖−σ𝑛=1
𝑛≠𝑖
𝑁
𝑋𝑛𝑖
Yields an estimate of 𝜃= 8.28

Trade Shares vs 𝑫𝒏𝒊Estimates
EK(2002)

Estimating the Model’s Gravity Equation
Recall 
𝑋𝑛𝑖
𝑋𝑛= 𝜋𝑛𝑖= 𝑇𝑖
𝛾𝑑𝑛𝑖𝑤𝑖
𝛽𝑝𝑖
1−𝛽
𝑝𝑛
−𝜃
.  Note that we can normalize imports by domestic sales to get
𝑋𝑛𝑖
𝑋𝑛𝑛
= 𝑇𝑖
𝑇𝑛
𝑤𝑖
𝑤𝑛
−𝜃𝛽
𝑝𝑖
𝑝𝑛
−𝜃1−𝛽
𝑑𝑛𝑖
−𝜃
And we also have from  combining 
𝑋𝑛𝑛
𝑋𝑛and 
𝑋𝑖𝑖
𝑋𝑖that
𝑝𝑖
𝑝𝑛
= 𝑤𝑖
𝑤𝑛
𝑇𝑖
𝑇𝑛
−1
𝜃𝛽
𝑋𝑖/𝑋𝑖𝑖
𝑋𝑛/𝑋𝑛𝑛
−1
𝜃𝛽

Estimating the Model’s Gravity Equation
Combining the previous two equations and taking logs yields
log 𝑋𝑛𝑖
′
𝑋𝑛𝑛
′
= −𝜃𝑑𝑛𝑖+ 1
𝛽log 𝑇𝑖
𝑇𝑛
−𝜃log 𝑤𝑖
𝑤𝑛
Where log 𝑋𝑛𝑖
′ ≔log 𝑋𝑛𝑖−
1 −𝛽/𝛽log 𝑋𝑖/𝑋𝑖𝑖.
Note if we define 𝑆𝑖≔
1
𝛽log 𝑇𝑖−𝜃log 𝑤𝑖, then the gravity equation becomes
log 𝑋𝑛𝑖
′
𝑋𝑛𝑛
′
= −𝜃log 𝑑𝑛𝑖+ 𝑆𝑖−𝑆𝑛
Where 𝑆𝑖is country 𝑖’s “competitiveness,” or technology adjusted for labor costs

Estimating the Model’s Gravity Equation
log 𝑋𝑛𝑖
′
𝑋𝑛𝑛
′
= −𝜃log 𝑑𝑛𝑖+ 𝑆𝑖−𝑆𝑛
• Can compute log
𝑋𝑛𝑖
′
𝑋𝑛𝑛
′
from bilateral trade data (with 𝛽= 0.21, the average labor share in sample)
• 𝑆𝑖and 𝑆𝑛are estimated with country fixed effects
• Still have problem with distance, estimate following gravity literature
log 𝑑𝑛𝑖= 𝑑𝑘+ 𝑏+ 𝑙+ 𝑒ℎ+ 𝑚ℎ+ 𝛿𝑛𝑖
• Where 𝑑𝑘, 𝑘= 1, … , 6, is a distance range; 𝑏is a shared border; 𝑙is a shared language; 𝑒ℎis if 
both are in a shared trading area (ℎ= 1 ⇒European Community, ℎ= 2 ⇒European Free Trade 
Area); 𝑚𝑛is a destination effect, and 𝛿𝑛𝑖is the error term

Bilateral Gravity Equation Estimates
EK(2002)

Bilateral Gravity Equation Estimates
EK(2002)

Estimating Technology and Distance
To estimate technology parameters, note that
𝑆𝑖≔1
𝛽log 𝑇𝑖−𝜃log 𝑤𝑖
• Use estimated 𝛽= 0.21 from average labor share, estimate 𝜃= 8.21 from before, and then wage 
data (adjusted for education) for 𝑤𝑖.
• Then 𝑇𝑖is given by the estimate of 𝑆𝑖from the gravity regression.
• For trade costs (geography effects), plug in errors from gravity regression into 𝑑𝑛𝑖regression
log 𝑑𝑛𝑖= 𝑑𝑘+ 𝑏+ 𝑙+ 𝑒ℎ+ 𝑚ℎ+ 𝛿𝑛𝑖

Technology Parameter Estimates
EK(2002)

Geographic Barrier Estimates (effect on 𝒅𝒏𝒊)
EK(2002)

Geographic Barrier Estimates (effect on 𝒅𝒏𝒊)
EK(2002)

Counterfactuals
Suppose countries have income 𝑌and share 𝛼is spent on the manufacturing (tradable) sector.
Consider two cases for labor market. Both change equations for (manufacturing) wages slightly
• Manufacturing labor supply is fixed ⇒Manufacturing labor income changes only with wages
• Labor supply is fully mobile ⇒as wages change, manufacturing labor supply changes
Need a measure to evaluate welfare using real GDP = 𝑌𝑛/𝑝𝑛𝛼(non-manufacturing is a numeraire):
log 𝑅𝐺𝐷𝑃′
log 𝑅𝐺𝐷𝑃= log 𝑌𝑛′
log 𝑌−𝛼log 𝑝𝑛′
𝑝𝑛
≈𝑤𝑛′ −𝑤𝑛
𝑤𝑛
𝑤𝑛𝐿𝑛
𝑌𝑛
income effect
−𝛼log 𝑝𝑛′
𝑝𝑛
price effec𝑡
Note with mobile labor the income effect disappears

Counterfactuals
Base parameters are as follows:
Two counterfactuals
• Welfare losses from moving to autarky 𝑑𝑛𝑖= ∞, ∀𝑛≠𝑖from current trade (𝑑𝑛𝑖as estimated)
• Welfare gains from moving to a frictionless world 𝑑𝑛𝑖= 1 or doubling trade 

Welfare Losses from Moving to Autarky
EK(2002)

Welfare Gains from Reducing Trade Costs
EK(2002)
