import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    Box,
    FormControl,
    FormLabel,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Button,
    Radio,
    RadioGroup,
    HStack,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Heading,
    Select,
    StatGroup,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Tooltip,
    Divider,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useState, useEffect, useCallback } from 'react'
import smmlv from '../resources/smmlv.json'; // Asegúrate de que la ruta al archivo JSON es correcta
const steps = [
    { title: 'Primer paso', description: 'Selecciona el periodo de consulta' },
    { title: 'Segundo paso', description: 'Diligencia la información financiera' },
    { title: 'Tercer paso', description: '¿Conoces los ingresos del deudor?' },
    { title: 'Cuarto paso', description: '¡Conoce la cuota!' },
]

function Cuota() {
    const [activeStep, setActiveStep] = useState(0);

    // Variables de estado para los valores de la cuota necesaria
    const [viviendaArriendoNecesario, setviviendaArriendoNecesario] = useState(0);
    const [viviendaMueblesNecesario, setviviendaMueblesNecesario] = useState(0);
    const [EducacionPensionNecesario, setEducacionPensionNecesario] = useState(0);
    const [educacionUtilesNecesario, setEducacionUtilesNecesario] = useState(0);
    const [educacionUniformeNecesario, setEducacionUniformeNecesario] = useState(0);
    const [educacionAlimentacionNecesario, setEducacionAlimentacionNecesario] = useState(0);
    const [educacionTransporteNecesario, setEducacionTransporteNecesario] = useState(0);
    const [educacionOtrosNecesario, setEducacionOtrosNecesario] = useState(0);
    const [vestidoNecesario, setVestidoNecesario] = useState(0);
    const [saludMedicinaPrepagadaNecesario, setSaludMedicinaPrepagadaNecesario] = useState(0);
    const [saludMedicamentosEspecialesNecesario, setSaludMedicamentosEspecialesNecesario] = useState(0);
    const [saludServiciosMedicosEspecialesNecesario, setSaludServiciosMedicosEspecialesNecesario] = useState(0);
    const [saludAyudasTecnicasNecesario, setSaludAyudasTecnicasNecesario] = useState(0);
    const [cuidadoPersonalArticulosAseoNecesario, setCuidadoPersonalArticulosAseoNecesario] = useState(0);
    const [cuidadoPersonalServiciosNecesario, setCuidadoPersonalServiciosNecesario] = useState(0);
    const [alimentacion, setAlimentacion] = useState(0);
    const [cuido, setCuido] = useState(0);

    const [cuotaNecesaria, setCuotaNecesaria] = useState(0);
    const [cuotaNecesariasiguiente, setCuotaNecesariaSiguiente] = useState(0);
    const [cuotaNecesariasiguiente2, setCuotaNecesariaSiguiente2] = useState(0);

    // Variables de estado para los valores de la cuota congrua
    const [cuotaCongrua, setCuotaCongrua] = useState(0);
    const [cuotaCongruasiguiente, setCuotaCongruaSiguiente] = useState(0);
    const [cuotaCongruasiguiente2, setCuotaCongruaSiguiente2] = useState(0);

    const [viviendaArriendoCongruo, setviviendaArriendoCongruo] = useState(0);
    const [viviendaMueblesCongruo, setviviendaMueblesCongruo] = useState(0);
    const [EducacionPensionCongruo, setEducacionPensionCongruo] = useState(0);
    const [educacionUtilesCongruo, setEducacionUtilesCongruo] = useState(0);
    const [educacionUniformeCongruo, setEducacionUniformeCongruo] = useState(0);
    const [educacionAlimentacionCongruo, setEducacionAlimentacionCongruo] = useState(0);
    const [educacionTransporteCongruo, setEducacionTransporteCongruo] = useState(0);
    const [educacionOtrosCongruo, setEducacionOtrosCongruo] = useState(0);
    const [vestidoCongruo, setVestidoCongruo] = useState(0);
    const [saludMedicinaPrepagadaCongruo, setSaludMedicinaPrepagadaCongruo] = useState(0);
    const [saludMedicamentosEspecialesCongruo, setSaludMedicamentosEspecialesCongruo] = useState(0);
    const [saludServiciosMedicosEspecialesCongruo, setSaludServiciosMedicosEspecialesCongruo] = useState(0);
    const [saludAyudasTecnicasCongruo, setSaludAyudasTecnicasCongruo] = useState(0);
    const [cuidadoPersonalArticulosAseoCongruo, setCuidadoPersonalArticulosAseoCongruo] = useState(0);
    const [cuidadoPersonalServiciosCongruo, setCuidadoPersonalServiciosCongruo] = useState(0);
    const [alimentacionCongruo, setAlimentacionCongruo] = useState(0);
    const [cuidoCongruo, setCuidoCongruo] = useState(0);
    const [dependientesEconomicos, setDependientesEconomicos] = useState(1);

    const [respuesta, setRespuesta] = useState('No');
    const [salario, setSalario] = useState(0);
    const [anio, setAnio] = useState(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [orientation, setOrientation] = useState(window.innerWidth > 1200 ? 'horizontal' : 'vertical');

    useEffect(() => {
        setCuotaNecesaria(
            (parseFloat(viviendaArriendoNecesario) +
            parseFloat(viviendaMueblesNecesario) / 12 +
            parseFloat(EducacionPensionNecesario) +
            parseFloat(educacionUtilesNecesario) / 12 +
            parseFloat(educacionUniformeNecesario) / 12 +
            parseFloat(educacionAlimentacionNecesario) +
            parseFloat(educacionTransporteNecesario) +
            parseFloat(educacionOtrosNecesario) / 12 +
            parseFloat(vestidoNecesario) / 12 +
            parseFloat(saludMedicinaPrepagadaNecesario) +
            parseFloat(saludMedicamentosEspecialesNecesario) / 12 +
            parseFloat(saludServiciosMedicosEspecialesNecesario) +
            parseFloat(saludAyudasTecnicasNecesario) / 12 +
            parseFloat(cuidadoPersonalArticulosAseoNecesario) / 12 +
            parseFloat(cuidadoPersonalServiciosNecesario) / 12 +
            parseFloat(alimentacion) +
            parseFloat(cuido))/(2*dependientesEconomicos)
        );
    }, [viviendaArriendoNecesario, viviendaMueblesNecesario, EducacionPensionNecesario, educacionUtilesNecesario, educacionUniformeNecesario, educacionAlimentacionNecesario, educacionTransporteNecesario, educacionOtrosNecesario, vestidoNecesario, saludMedicinaPrepagadaNecesario, saludMedicamentosEspecialesNecesario, saludServiciosMedicosEspecialesNecesario, saludAyudasTecnicasNecesario, cuidadoPersonalArticulosAseoNecesario, cuidadoPersonalServiciosNecesario, alimentacion, cuido, dependientesEconomicos]);
    useEffect(() => {
        setCuotaCongrua(
            (parseFloat(viviendaArriendoCongruo) +
            parseFloat(viviendaMueblesCongruo) / 12 +
            parseFloat(EducacionPensionCongruo) +
            parseFloat(educacionUtilesCongruo) / 12 +
            parseFloat(educacionUniformeCongruo) / 12 +
            parseFloat(educacionAlimentacionCongruo) +
            parseFloat(educacionTransporteCongruo) +
            parseFloat(educacionOtrosCongruo) / 12 +
            parseFloat(vestidoCongruo) / 12 +
            parseFloat(saludMedicinaPrepagadaCongruo) +
            parseFloat(saludMedicamentosEspecialesCongruo) / 12 +
            parseFloat(saludServiciosMedicosEspecialesCongruo) +
            parseFloat(saludAyudasTecnicasCongruo) / 12 +
            parseFloat(cuidadoPersonalArticulosAseoCongruo) / 12 +
            parseFloat(cuidadoPersonalServiciosCongruo) / 12 +
            parseFloat(alimentacionCongruo) +
            parseFloat(cuidoCongruo))/(2*dependientesEconomicos)
        );
    }, [viviendaArriendoCongruo, viviendaMueblesCongruo, EducacionPensionCongruo, educacionUtilesCongruo, educacionUniformeCongruo, educacionAlimentacionCongruo, educacionTransporteCongruo, educacionOtrosCongruo, vestidoCongruo, saludMedicinaPrepagadaCongruo, saludMedicamentosEspecialesCongruo, saludServiciosMedicosEspecialesCongruo, saludAyudasTecnicasCongruo, cuidadoPersonalArticulosAseoCongruo, cuidadoPersonalServiciosCongruo, alimentacionCongruo, cuidoCongruo, dependientesEconomicos]);

    useEffect(() => {
        if (respuesta === 'No') {
            setSalario(smmlv[String(anio)]);
        }
    }, [respuesta, anio]);
    useEffect(() => {
        if (anio === null || anio === '') {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
    }, [anio]);
    useEffect(() => {
        const handleResize = () => {
            setOrientation(window.innerWidth > 768 ? 'horizontal' : 'vertical');
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    function calcularCuotaNecesaria() {
        if (cuotaNecesaria > salario / 2) {
            setCuotaNecesaria(salario / 2);
        }
        return cuotaNecesaria;
    }
    function calcularCuotaCongrua() {
        if (cuotaCongrua > salario / 2) {
            setCuotaCongrua(salario / 2);
        }
        return cuotaCongrua;
    }
    const calcularCuotaNecesariaSig = useCallback(() => {
        if (anio <= 2023) {
            setCuotaNecesariaSiguiente(Math.floor(cuotaNecesaria * smmlv[String(Number(anio) + 1)] / smmlv[String(anio)]));
        } else {
            setCuotaNecesariaSiguiente(null);
        }
    }, [anio, cuotaNecesaria]);
    const calcularCuotaCongruaSig = useCallback(() => {
        if (anio <= 2023) {
            setCuotaCongruaSiguiente(Math.floor(cuotaCongrua * smmlv[String(Number(anio) + 1)] / smmlv[String(anio)]));
        } else {
            setCuotaCongruaSiguiente(null);
        }
    }, [anio, cuotaCongrua]);

    const calcularCuotaNecesariaSig2 = useCallback(() => {
        if (anio <= 2022) {
            setCuotaNecesariaSiguiente2(Math.floor(cuotaNecesariasiguiente * smmlv[String(Number(anio) + 2)] / smmlv[String(Number(anio) + 1)]));
        } else {
            setCuotaNecesariaSiguiente2(null);
        }
    }, [anio, cuotaNecesariasiguiente]);

    const calcularCuotaCongruaSig2 = useCallback(() => {
        if (anio <= 2022) {
            setCuotaCongruaSiguiente2(Math.floor(cuotaCongruasiguiente * smmlv[String(Number(anio) + 2)] / smmlv[String(Number(anio) + 1)]));
        } else {
            setCuotaCongruaSiguiente2(null);
        }
    }, [anio, cuotaCongruasiguiente]);

    useEffect(() => {
        calcularCuotaNecesariaSig();
        calcularCuotaNecesariaSig2();
    }, [calcularCuotaNecesariaSig, calcularCuotaNecesariaSig2]);

    useEffect(() => {
        calcularCuotaCongruaSig();
        calcularCuotaCongruaSig2();
    }, [calcularCuotaCongruaSig, calcularCuotaCongruaSig2]);

    function futurasCuotaNecesarias() {
        if (cuotaNecesariasiguiente !== null && cuotaNecesariasiguiente2 !== null) {
            return <div>
                <StatGroup>
                    <Stat>
                        <StatLabel>Cuota para {String(Number(anio) + 1)}</StatLabel>
                        <StatNumber>{cuotaNecesariasiguiente.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }).slice(0, -3)}</StatNumber>
                    </Stat>

                    <Stat>
                        <StatLabel>Cuota para {String(Number(anio) + 2)}</StatLabel>
                        <StatNumber>{cuotaNecesariasiguiente2.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }).slice(0, -3)}</StatNumber>
                    </Stat>
                </StatGroup>
            </div>;
        } else if (cuotaNecesariasiguiente !== null) {
            return <div>
                <StatGroup>
                    <Stat>
                        <StatLabel>CuotaNecesaria para {String(Number(anio) + 1)}</StatLabel>
                        <StatNumber>{cuotaNecesariasiguiente.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }).slice(0, -3)}</StatNumber>
                    </Stat>
                </StatGroup>
            </div>;
        } else {
            return <div></div>
        }
    }

    function futurasCuotaCongruas() {
        if (cuotaCongruasiguiente !== null && cuotaCongruasiguiente2 !== null) {
            return <div>
                <StatGroup>
                    <Stat>
                        <StatLabel>Cuota para {String(Number(anio) + 1)}</StatLabel>
                        <StatNumber>{cuotaCongruasiguiente.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }).slice(0, -3)}</StatNumber>
                    </Stat>

                    <Stat>
                        <StatLabel>Cuota para {String(Number(anio) + 2)}</StatLabel>
                        <StatNumber>{cuotaCongruasiguiente2.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }).slice(0, -3)}</StatNumber>
                    </Stat>
                </StatGroup>
            </div>;
        } else if (cuotaCongruasiguiente !== null) {
            return <div>
                <StatGroup>
                    <Stat>
                        <StatLabel>CuotaCongrua para {String(Number(anio) + 1)}</StatLabel>
                        <StatNumber>{cuotaCongruasiguiente.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }).slice(0, -3)}</StatNumber>
                    </Stat>
                </StatGroup>
            </div>;
        }
    }

    const Pasos = () => {
        switch (activeStep) {
            case 0:
                return <div className="h-[40vh] relative flex items-center justify-center">
                    <div>
                        <div className="w-auto ml-4 mr-4">
                            <Heading as='h1' size='xl' noOfLines={6}>
                                Selecciona el año
                            </Heading>
                        </div>
                        <div className="w-auto ml-4 mr-4">
                            <Select placeholder='Selecciona un año' onChange={(e) => setAnio(e.target.value)}>
                                <option value='2010'>2010</option>
                                <option value='2011'>2011</option>
                                <option value='2012'>2012</option>
                                <option value='2013'>2013</option>
                                <option value='2014'>2014</option>
                                <option value='2015'>2015</option>
                                <option value='2016'>2016</option>
                                <option value='2017'>2017</option>
                                <option value='2018'>2018</option>
                                <option value='2019'>2019</option>
                                <option value='2020'>2020</option>
                                <option value='2021'>2021</option>
                                <option value='2022'>2022</option>
                                <option value='2023'>2023</option>
                                <option value='2024'>2024</option>
                            </Select>
                        </div>
                        <div className="absolute bottom-0 right-0 pt-3">
                            <Button isDisabled={isButtonDisabled} colorScheme='blue' onClick={() => setActiveStep(nextStep => nextStep + 1)}>Siguiente</Button>
                        </div>
                    </div>
                </div>;
            case 1:
                return <div className="relative">
                    <div className="overflow-scroll flex items-center justify-center">
                        <div className="w-auto ml-4 mr-4">
                            <TableContainer>
                                <Table variant='striped'>
                                    <Thead>
                                        <Tr>
                                            <Th> <Heading as='h2' size='md' noOfLines={1}> Vivienda </Heading> </Th>
                                            <Th>Necesario</Th>
                                            <Th>Congruo</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                {"Arrendamiento/ Servicios/ Administración".split(" ").map((text, index, array) => (
                                                    <React.Fragment key={index}>
                                                        {text}
                                                        {index < array.length - 1 && <br />}
                                                    </React.Fragment>
                                                ))} (mensual)
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={viviendaArriendoNecesario} onChange={(value) => setviviendaArriendoNecesario(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={viviendaArriendoCongruo} onChange={(value) => setviviendaArriendoCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Muebles (anual)</Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={viviendaMueblesNecesario} onChange={(value) => setviviendaMueblesNecesario(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={viviendaMueblesCongruo} onChange={(value) => setviviendaMueblesCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                    <Thead>
                                        <Tr>
                                            <Th> <Heading as='h2' size='md' noOfLines={1}> Educación </Heading> </Th>
                                            <Th>Necesario</Th>
                                            <Th>Congruo</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                Pensión (mensual)
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={EducacionPensionNecesario} onChange={(value) => setEducacionPensionNecesario(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={EducacionPensionCongruo} onChange={(value) => setEducacionPensionCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                Útiles (anual)
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={educacionUtilesNecesario} onChange={(value) => setEducacionUtilesNecesario(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={educacionUtilesCongruo} onChange={(value) => setEducacionUtilesCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                Uniforme (anual)
                                            </Td>
                                            <Td>
                                                <NumberInput max={1000000000} min={0} value={educacionUniformeNecesario} onChange={(value) => setEducacionUniformeNecesario(value)}>
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </Td>
                                            <Td>
                                                <NumberInput max={1000000000} min={0} value={educacionUniformeCongruo} onChange={(value) => setEducacionUniformeCongruo(value)}>
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                Alimentación (mensual)
                                            </Td>
                                            <Td>
                                                <NumberInput max={1000000000} min={0} value={educacionAlimentacionNecesario} onChange={(value) => setEducacionAlimentacionNecesario(value)}>
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </Td>
                                            <Td>
                                                <NumberInput max={1000000000} min={0} value={educacionAlimentacionCongruo} onChange={(value) => setEducacionAlimentacionCongruo(value)}>
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                Transporte (mensual)
                                            </Td>
                                            <Td>
                                                <NumberInput max={1000000000} min={0} value={educacionTransporteNecesario} onChange={(value) => setEducacionTransporteNecesario(value)}>
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </Td>
                                            <Td>
                                                <NumberInput max={1000000000} min={0} value={educacionTransporteCongruo} onChange={(value) => setEducacionTransporteCongruo(value)}>
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Tooltip label="Otros gastos escolares fijos como salidas, eventos culturales, entre otros" aria-label='Aclaración'>
                                                    Otros (anual)
                                                </Tooltip>
                                            </Td>
                                            <Td>
                                                <NumberInput max={1000000000} min={0} value={educacionOtrosNecesario} onChange={(value) => setEducacionOtrosNecesario(value)}>
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </Td>
                                            <Td>
                                                <NumberInput max={1000000000} min={0} value={educacionOtrosCongruo} onChange={(value) => setEducacionOtrosCongruo(value)}>
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                    <Thead>
                                        <Tr>
                                            <Th> <Heading as='h2' size='md' noOfLines={1}> Vestido </Heading> </Th>
                                            <Th>Necesario</Th>
                                            <Th>Congruo</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                Vestuario (anual)
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={vestidoNecesario} onChange={value => setVestidoNecesario(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={vestidoCongruo} onChange={value => setVestidoCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                    <Thead>
                                        <Tr>
                                            <Th> <Heading as='h2' size='md' noOfLines={1}> Salud </Heading> </Th>
                                            <Th>Necesario</Th>
                                            <Th>Congruo</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                Medicina prepagada (mensual)
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={saludMedicinaPrepagadaNecesario} onChange={(value) => setSaludMedicinaPrepagadaNecesario(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={saludMedicinaPrepagadaCongruo} onChange={(value) => setSaludMedicinaPrepagadaCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                Medicamentos especiales (anual)
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={saludMedicamentosEspecialesNecesario} onChange={(value) => setSaludMedicamentosEspecialesNecesario(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={saludMedicamentosEspecialesCongruo} onChange={(value) => setSaludMedicamentosEspecialesCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                {"Servicios médicos especiales"} <br /> {"(mensual)"}
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={saludServiciosMedicosEspecialesNecesario} onChange={(value) => setSaludServiciosMedicosEspecialesNecesario(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={saludServiciosMedicosEspecialesCongruo} onChange={(value) => setSaludServiciosMedicosEspecialesCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                Ayudas técnicas (anual)
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={saludAyudasTecnicasNecesario} onChange={(value) => setSaludAyudasTecnicasNecesario(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={saludAyudasTecnicasCongruo} onChange={(value) => setSaludAyudasTecnicasCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                    <Thead>
                                        <Tr>
                                            <Th> <Heading as='h2' size='md' noOfLines={1}> Cuidado personal </Heading> </Th>
                                            <Th>Necesario</Th>
                                            <Th>Congruo</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                {"Artículos de aseo personal"} <br /> {"(anual)"}
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={cuidadoPersonalArticulosAseoNecesario} onChange={(value) => setCuidadoPersonalArticulosAseoNecesario(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={cuidadoPersonalArticulosAseoCongruo} onChange={(value) => setCuidadoPersonalArticulosAseoCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                {"Servicios de cuidado personal"} <br /> {"(anual)"}
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={cuidadoPersonalServiciosNecesario} onChange={(value) => setCuidadoPersonalServiciosNecesario(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={cuidadoPersonalServiciosCongruo} onChange={(value) => setCuidadoPersonalServiciosCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                    <Thead>
                                        <Tr>
                                            <Th> <Heading as='h2' size='md' noOfLines={1}> Alimentación </Heading> </Th>
                                            <Th>Necesario</Th>
                                            <Th>Congruo</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                Alimentación (mensual)
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={alimentacion} onChange={(value) => setAlimentacion(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={alimentacionCongruo} onChange={(value) => setAlimentacionCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                    <Thead>
                                        <Tr>
                                            <Th> <Heading as='h2' size='md' noOfLines={1}> Cuido del menor </Heading> </Th>
                                            <Th>Necesario</Th>
                                            <Th>Congruo</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                {"Pago persona cuidadora"} <br /> {"(mensual)"}
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={cuido} onChange={(value) => setCuido(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                            <Td>
                                                <FormControl>
                                                    <NumberInput max={1000000000} min={0} value={cuidoCongruo} onChange={(value) => setCuidoCongruo(value)}>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper />
                                                            <NumberDecrementStepper />
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                </FormControl>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>

                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 pt-3">
                        <Button colorScheme='blue' onClick={() => setActiveStep(nextStep => nextStep - 1)}>Anterior</Button>
                    </div>
                    <div className="absolute bottom-0 right-0 pt-3">
                        <Button colorScheme='blue' onClick={() => setActiveStep(nextStep => nextStep + 1)}>Siguiente</Button>
                    </div>
                </div>;
            case 2:
                return <div className="h-[40vh] relative flex items-center justify-center">
                    <div className="w-auto ml-4 mr-4">
                        <FormControl as='fieldset'>
                            <FormLabel as='legend'>¿Conoces los ingresos del deudor/la deudora?</FormLabel>
                            <RadioGroup defaultValue='No' onChange={setRespuesta}>
                                <HStack spacing='24px'>
                                    <Radio value='Si'>Si</Radio>
                                    <Radio value='No'>No</Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl>
                        {respuesta === 'Si' && (
                            <FormControl>
                                <FormLabel>¿Cuál es el salario de la persona?</FormLabel>
                                <NumberInput value={salario} onChange={(value) => setSalario(value)} max={1000000000} min={1300000}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                        )}
                        <Divider height="20px" />
                        <FormControl as='fieldset'>
                            <FormLabel as='legend'>Incluyendo a este, ¿cuántos dependientes económicos tiene la persona?</FormLabel>
                            <NumberInput value={dependientesEconomicos} onChange={(value) => setDependientesEconomicos(value)} max={20} min={1}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                    </div>
                    <div className="absolute bottom-0 left-0 pt-3">
                        <Button colorScheme='blue' onClick={() => setActiveStep(nextStep => nextStep - 1)}>Anterior</Button>
                    </div>
                    <div className="absolute bottom-0 right-0 pt-3">
                        <Button colorScheme='blue' onClick={() => setActiveStep(nextStep => nextStep + 1)}>Siguiente</Button>
                    </div>
                </div>;
            case 3:
                return <div>
                    <Tabs variant='soft-rounded' isFitted >
                        <TabList>
                            <Tab>Cuota necesaria</Tab>
                            <Tab>Cuota congrua</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <div className="h-[40vh] relative flex items-center justify-center">
                                    <div className="w-auto ml-4 mr-4">
                                        <Stat>
                                            <StatLabel>La cuota alimenticia necesaria para {anio} se ha definido en</StatLabel>
                                            <StatNumber>{calcularCuotaNecesaria().toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}  mensuales</StatNumber>
                                            <StatHelpText>Puedes calcular la deuda con el botón de la derecha</StatHelpText>
                                        </Stat>
                                        {futurasCuotaNecesarias()}
                                        <div className="absolute bottom-0 left-0 pt-3">
                                            <Button colorScheme='blue' onClick={() => setActiveStep(nextStep => nextStep - 1)}>Anterior</Button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="h-[40vh] relative flex items-center justify-center">
                                    <div className="w-auto ml-4 mr-4">
                                        <Stat>
                                            <StatLabel>La cuota alimenticia congrua para {anio} se ha definido en</StatLabel>
                                            <StatNumber>{calcularCuotaCongrua().toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}  mensuales</StatNumber>
                                        </Stat>
                                        {futurasCuotaCongruas()}
                                        <div className="absolute bottom-0 left-0 pt-3">
                                            <Button colorScheme='blue' onClick={() => setActiveStep(nextStep => nextStep - 1)}>Anterior</Button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>;
            default:
                return <h1>Paso desconocido</h1>;
        }
    }

    return (
        <div>
            {Pasos()}
            <Stepper index={activeStep} orientation={orientation}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <Box flexShrink='0'>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export default Cuota