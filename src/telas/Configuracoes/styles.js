import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    // Container principal com scroll
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    
    // Título principal da tela
    titulo: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        marginBottom: 25,
        marginTop: 15,
        color: '#000',
    },
    
    // Seção de configurações agrupadas
    secao: {
        marginBottom: 20,
    },
    
    // Título de cada seção
    tituloSecao: {
        fontSize: RFPercentage(2.2),
        fontWeight: '700',
        color: '#333',
        marginBottom: 12,
        paddingLeft: 5,
    },
    
    // Linha de opção com switch
    opcao: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    
    // Container do texto de opção
    textoOpcao: {
        flex: 1,
        justifyContent: 'center',
    },
    
    // Label da opção
    labelOpcao: {
        fontSize: RFPercentage(2),
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    
    // Descrição da opção
    descricaoOpcao: {
        fontSize: RFPercentage(1.6),
        color: '#999',
    },
    
    // Botão de opção (sem switch)
    botaoOpcao: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    
    // Valor da opção
    valorOpcao: {
        fontSize: RFPercentage(1.8),
        color: '#007AFF',
        fontWeight: '500',
    },
    
    // Card para sair da conta
    cardSair: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginTop: 30,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
    
    // Texto do card
    textoCardSair: {
        fontSize: RFPercentage(2.5),
        fontWeight: '600',
        color: '#333',
        marginBottom: 15,
    },
    
    // Botão sair com sombra vermelha
    botaoSair: {
        backgroundColor: '#FF3B30',
        borderRadius: 12,
        padding: 15,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#FF3B30',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
    },
    
    // Texto do botão sair
    textoBotaoSair: {
        color: '#fff',
        fontSize: RFPercentage(2.2),
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});

export default styles;