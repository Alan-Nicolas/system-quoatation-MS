package com.alan.orcamentoapi.services;

import com.alan.orcamentoapi.entity.Orcamento;
import com.alan.orcamentoapi.repository.OrcamentoRepository;
import com.alan.orcamentoapi.request.OrcamentoPostRequest;
import com.alan.orcamentoapi.request.OrcamentoPutRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrcamentoServices {
    private final OrcamentoRepository repository;

    public List<Orcamento> listAll () {
        return repository.findAll();
    }

    public Orcamento addQuoatation (OrcamentoPostRequest postRequest){
        return repository.save(Orcamento.builder()
                        .nameClient(postRequest.nameClient())
                        .cpfClient(postRequest.cpfClient())
                        .typeService(postRequest.typeService())
                        .valueService(postRequest.valueService())
                        .description(postRequest.description())
                        .build());
    }

    public Orcamento buscarPorId (Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("user not found"));
    }



    public void delete (long id) {
        repository.delete(buscarPorId(id));
    }

    public Orcamento atualizarOrcamento (Long id, OrcamentoPutRequest orcamentoPutRequest) {
        Orcamento orcamentoSaved = buscarPorId(id);

        Orcamento orcamentoUptade = Orcamento.builder()
                .id(orcamentoSaved.getId())
                .nameClient(orcamentoPutRequest.nameClient())
                .cpfClient(orcamentoPutRequest.cpfClient())
                .typeService(orcamentoPutRequest.typeService())
                .valueService(orcamentoPutRequest.valueService())
                .description(orcamentoPutRequest.description())
                .build();
        return repository.save(orcamentoUptade);
    }
}
