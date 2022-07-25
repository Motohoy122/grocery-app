import React from 'react'

const RecipeItem = () => {
    return (
        <Item>
            <Accordion sx={{width: '100%', boxShadow: 'none', heigth: 'fit-content'}}>
                <AccordionSummary>   
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                        />
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: 20,
                                letterSpacing: .64,
                                marginLeft: 1,
                            }}
                        >
                            {name}
                        </Typography>
                    </Box>
                    <Box>
                        <CounterBox>
                            <IconButton>
                                <RemoveIcon />
                            </IconButton>
                            <Typography
                                component="span"
                                sx={{
                                    opacity: '.8',
                                    fontWeight: '600',
                                    fontSize: '13px',
                                    ml: '3px',
                                }}
                            ></Typography>
                            <CounterValue>
                                1
                            </CounterValue>
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                        </CounterBox>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Typography>
                                Time: {timeDuration}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>
                                # of Servings: {numOfServings}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Ingridients: 
                                <List sx={{display: 'flex', width: '100%'}}>
                                    {
                                        ingridients.map(ingridient => (
                                            <ListItem>
                                                <ListItemText primary={ingridient.name} secondary={`${ingridient.measurementQuantity} ${ingridient.measurementType}`}/>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <Typography sx={{display:'flex', width: '100%'}}>
                            Tools:&nbsp; {
                                    tools.map(tool => (
                                        <Typography> {tool}, </Typography>
                                    ))
                                }

                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Instructions: 
                                <List sx={{width: '100%'}}>
                                    {
                                        steps.map((step, index) => (
                                            <ListItem>
                                                <ListItemText primary={`${index + 1}) ${step}`}/>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Nutrition: 
                            </Typography>
                            <List sx={{display:'flex', width: '100%'}}>
                                <ListItem>
                                    <ListItemText primary={`Calories: ${nutrition.calories}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Carbs: ${nutrition.carbs}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Fat: ${nutrition.fat}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Protein: ${nutrition.protein}`} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={()=>dispatch(deleteRecipe(id))}>
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
    </Item>

    )
}

export default RecipeItem
