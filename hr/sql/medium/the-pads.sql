-- Generate the following two result sets:
-- 
-- Query an alphabetically ordered list of all names in OCCUPATIONS, immediately followed by the first
-- letter of each profession as a parenthetical (i.e.: enclosed in parentheses). For example:
-- AnActorName(A), ADoctorName(D), AProfessorName(P), and ASingerName(S).
-- 
-- Query the number of ocurrences of each occupation in OCCUPATIONS. Sort the occurrences in
-- ascending order, and output them in the following format:
--     There are a total of [occupation_count] [occupation]s.
-- where [occupation_count] is the number of occurrences of an occupation in OCCUPATIONS and
-- [occupation] is the lowercase occupation name. If more than one Occupation has the same
-- [occupation_count], they should be ordered alphabetically.
-- 
-- Note: There will be at least two entries in the table for each type of occupation.
-- 
-- Input Format
-- 
-- The OCCUPATIONS table is described as follows:
-- | Column     | Type   |
-- | Name       | String |
-- | Occupation | String |
-- Occupation will only contain one of the following values: Doctor, Professor, Singer or Actor.
-- 
-- Sample Input
-- 
-- An OCCUPATIONS table that contains the following records:
-- | Name      | Occupation |
-- | Samatha   | Doctor     |
-- | Julia     | Actor      |
-- | Maria     | Actor      |
-- | Meera     | Singer     |
-- | Ashely    | Professor  |
-- | Ketty     | Professor  |
-- | Christeen | Professor  |
-- | Jane      | Actor      |
-- | Jenny     | Doctor     |
-- | Priya     | Singer     |
-- 
-- Sample Output
-- 
-- Ashely(P)
-- Christeen(P)
-- Jane(A)
-- Jenny(D)
-- Julia(A)
-- Ketty(P)
-- Maria(A)
-- Meera(S)
-- Priya(S)
-- Samantha(D)
-- There are a total of 2 doctors.
-- There are a total of 2 singers.
-- There are a total of 3 actors.
-- There are a total of 3 professors.

SELECT
    CONCAT(NAME, '(', LEFT(Occupation, 1), ')') AS C1
FROM OCCUPATIONS
ORDER BY C1
;
SELECT
    CONCAT('There are a total of ', COUNT(*), ' ', Lower(Occupation), 's.') AS C1
FROM OCCUPATIONS
GROUP BY Occupation
ORDER BY C1
;
